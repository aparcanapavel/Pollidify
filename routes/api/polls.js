const express = require("express");
const router = express.Router();
const passport = require('passport');
const Poll = require('../../models/Poll');
const Choice = require('../../models/Choice');
const validatePollInput = require('../../validation/create-poll');
const validateChoiceInput = require('../../validation/create-choice');
const Vote = require('../../models/Vote');
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const User = require("../../models/User");

router.get('/', (req, res) => {
  Poll.find()
    .sort({ date: -1 })
    .then(polls => {
      let pollsObj = {};
      polls.forEach(poll => {
        pollsObj[poll._id] = poll;
      });
      res.json(pollsObj);
    })
    .catch(err => res.status(404).json({ noPolls: 'No polls found' }));
});

router.get('/user/:user_id', (req, res) => {
  Poll.find({ poller_id: req.params.user_id })
    .then(polls => {
      let pollsObj = {};
      polls.forEach(poll => {
        pollsObj[poll._id] = poll;
      });
      res.json(pollsObj);
    })
    .catch(err =>
      res.status(404).json({ noPolls: 'No polls found for that user' }
      )
    );
});

router.get('/:id', (req, res) => {
  Poll.findById(req.params.id)
    .then(poll => res.json(poll))
    .catch(err =>
      res.status(404).json({ notPolls: 'No poll found with that ID' })
    );
});

router.get('/voted/:user_id', (req, res) => {
  let choiceIds = [];
  let pollIds = [];

  Vote.find({ voter_id: req.params.user_id })
    .then(votes => {    
      for (let i = 0; i < votes.length; i++) {
        let vote = votes[i];
        choiceIds.push(vote.choice_id);
      }

      Choice.find({ _id: {$in: choiceIds} }).then(choices => {
        for (let j = 0; j < choices.length; j++) {
          let choice = choices[j];
          pollIds.push(choice.poll_id);
        }

        Poll.find({ _id: {$in: pollIds}}).then(polls => {
          let pollsObj = {};
          polls.forEach(poll => {
            pollsObj[poll._id] = poll;
          })
          res.json(pollsObj);
        })
      })
    })
    .catch(err => res.status(404).json({ noPolls: 'No polls found for that user' }));
})

router.post('/new',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePollInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPoll = new Poll({
      question: req.body.question,
      expiration_date: req.body.expiration_date,
      poller_id: req.user.id
    });

    if (req.body.choices.length >= 2) {
      newPoll.save().then(
        poll => {
          User.findOne({ _id: req.user.id }).then(user => {
            user.created.push(poll._id);
            user.save().then(user => {
              const choicesObj = {};
              const choices = req.body.choices;
              for (let i = 0; i < choices.length; i++) {
                let choice = choices[i];
                const { choiceErrors, isChoiceValid } = validateChoiceInput(choice);

                if (!isChoiceValid) {
                  res.status(400).json(choiceErrors);
                }
                
                let newChoice = new Choice({
                  response: choice,
                  poll_id: poll.id
                });
                newChoice.save().then(choice => {
                  choicesObj[choice._id] = choice;
                  if (i === choices.length - 1) {
                    const payload = {
                      id: user.id,
                      username: user.username,
                      voted: user.voted,
                      created: user.created
                    };
                    jwt.sign(
                      payload,
                      keys.secretOrKey,
                      { expiresIn: 21600 },
                      (err, token) => {
                        res.json({
                          success: true,
                          token: "Bearer " + token,
                          poll: poll,
                          choices: choices,
                          user: user
                        });
                      }
                    );
                  }
                });
              };
            })
          })
        }
      );
    } else {
      res.status(423).send({ choices: "Poll must contain at least two choices"})
    }
  }
);

router.delete('/:poll_id', passport.authenticate('jwt', { session: false }),
  (req, res) => {
  User.findOne({ _id: req.user.id }).then(user => {

    let pollIndex;
    pollIndex = user.created.indexOf(req.params.poll_id);
    user.created.splice(pollIndex, 1);

    let votedIndex;
    votedIndex = user.voted.indexOf(req.params.poll_id);
    user.voted.splice(votedIndex, 1);

    user.save().then(user => {
      Choice.find({ poll_id: req.params.poll_id })
        .then(choices => {
          for (let i = 0; i < choices.length; i++) {
            let choice = choices[i];
            Choice.deleteOne({ _id: choice.id }, function(err) {
              if (err) {
                console.log(`[error] ${err}`);
              } else {
                console.log("success delete choice");
              }
            });
          }
        })
        .then(() => {
          Poll.deleteOne({ _id: req.params.poll_id }, function(err) {
            if (err) {
              console.log(`[error] ${err}`);
            } else {
              const payload = {
                id: user.id,
                username: user.username,
                voted: user.voted,
                created: user.created
              };      
              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 21600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token,
                    user: user
                  });
                }
              );
            }
          });
        });
    })
  })
})

module.exports = router;
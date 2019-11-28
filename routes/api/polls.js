const express = require("express");
const router = express.Router();
const passport = require('passport');
const Poll = require('../../models/Poll');
const Choice = require('../../models/Choice');
const validatePollInput = require('../../validation/create-poll');
const Vote = require('../../models/Vote');

router.get('/', (req, res) => {
  Poll.find()
    .sort({ date: -1 })
    .then(polls => res.json(polls))
    .catch(err => res.status(404).json({ noPolls: 'No polls found' }));
});

router.get('/user/:user_id', (req, res) => {
  Poll.find({ poller_id: req.params.user_id })
    .then(polls => res.json(polls))
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
  Vote.find({ voter_id: req.params.user_id })
    .then(votes => {
      let polls = [];
      for (let i = 0; i < votes.length; i++) {
        let vote = votes[i];
        Choice.find({ _id: vote.choice_id }).then(choice => {
          Poll.find({ _id: choice.poll_id }).then(poll => {
            polls.push(poll);
          })
        })
      }

      res.json(polls);
      
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

    newPoll.save().then(
      poll => {
        const choicesObj = {};
        const choices = req.body.choices;
        for (let i = 0; i < choices.length; i++) {
          let choice = choices[i];
          let newChoice = new Choice({
            response: choice,
            poll_id: poll.id
          });
          newChoice.save().then(choice => {
            choicesObj[choice._id] = choice;
            if (i === choices.length - 1) {
              res.send({poll: poll, choices: choicesObj});
            }
          });
        };
        
      }
    );
  }
);

module.exports = router;
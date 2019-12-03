const express = require("express");
const router = express.Router();
const Vote = require('../../models/Vote');
const passport = require('passport');
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

router.get('/:choice_id', (req, res) => {
  Vote.find({choice_id: req.params.choice_id})
  .then(votes => {
    let votesObj = {};
    votes.forEach(vote => {
      votesObj[vote._id] = vote;
    });
    res.json(votesObj);
  })
    .catch(err => res.status(404).json({ noVotes: 'No votes found' }));
});

router.post('/:choice_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newVote = new Vote({
      voter_id: req.user.id,
      choice_id: req.params.choice_id
    });
    newVote.save().then(
      User.findOne({ _id: req.user.id }).then(user => {
        Choice.findOne({ _id: req.params.choice_id }).then(choice => {
          Poll.findOne({ _id: choice.poll_id }).then(poll => {
            user.voted.push(poll._id);
            user.save().then(user => {
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
            })
          })
        })
      })
    );
  })

module.exports = router;
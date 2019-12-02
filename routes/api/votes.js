const express = require("express");
const router = express.Router();
const Vote = require('../../models/Vote');
const passport = require('passport');

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
      res.json('Vote cast successfully')
    );
  })

module.exports = router;
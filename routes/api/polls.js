const express = require("express");
const router = express.Router();
const passport = require('passport');
const Poll = require('../../models/Poll');
const validatePollInput = require('../../validation/create-poll');


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

router.post('/',
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

    newPoll.save().then(poll => res.json(poll));
  }
);

module.exports = router;
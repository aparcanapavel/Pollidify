const express = require("express");
const router = express.Router();
const passport = require('passport');
const Choice = require('../../models/Choice');

router.get('/:poll_id', (req, res) => {
  Choice.find({poll_id: res.params.poll_id})
    .then(choices => res.json(choices))
    .catch(err => res.status(404).json({ noChoices: 'No choices found' }));
});

router.post('/:poll_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateChoiceInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newChoice = new Choice({
      response: req.body.response,
      poll_id: req.poll.id
    });

    newChoice.save().then(choice => res.json(choice));
  }
);

module.exports = router;
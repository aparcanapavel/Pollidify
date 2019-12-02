const express = require("express");
const router = express.Router();
const Choice = require('../../models/Choice');

router.get('/:poll_id', (req, res) => {
  Choice.find({poll_id: req.params.poll_id})
  .then(choices => {
    let choicesObj = {};
    choices.forEach(choice => {
      choicesObj[choice._id] = choice;
    });
    res.json(choicesObj);
  })
    .catch(err => res.status(404).json({ noChoices: 'No choices found' }));
});

module.exports = router;
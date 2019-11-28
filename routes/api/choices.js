const express = require("express");
const router = express.Router();
const Choice = require('../../models/Choice');

router.get('/:poll_id', (req, res) => {
  Choice.find({poll_id: req.params.poll_id})
    .then(choices => res.json(choices))
    .catch(err => res.status(404).json({ noChoices: 'No choices found' }));
});

module.exports = router;
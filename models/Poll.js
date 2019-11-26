const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  expiration_date: {
    type: Date,
    required: true
  },
  poller_id: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

PollSchema.index({
  poller_id: 1
})

module.exports = Poll = mongoose.model('polls', PollSchema);
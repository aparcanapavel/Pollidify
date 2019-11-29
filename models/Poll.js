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
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

PollSchema.index({
  poller_id: 1
});

PollSchema.pre('destroy', function (next) {
  let pollId = this.getQuery()["_id"];
  ChoiceSchema.deleteMany({'poll_id': pollId}, function (err) {
    if (err) {
      console.log(`[error] ${err}`);
      next(err);
    } else {
      console.log('success');
      next();
    }
  });
});

module.exports = Poll = mongoose.model('polls', PollSchema);
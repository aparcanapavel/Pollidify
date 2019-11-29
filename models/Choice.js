const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VoteSchema = require('./Vote.js');

const ChoiceSchema = new Schema({
  response: {
    type: String,
    required: true
  },
  poll_id: {
    type: Schema.Types.ObjectId,
    ref: 'polls'
  }
})

ChoiceSchema.index({
  poll_id: 1
})

ChoiceSchema.pre('deleteOne', function (next) {
  const choiceId = this.getQuery()["_id"];
  VoteSchema.deleteMany({'choice_id': choiceId}, function (err, result) {
    if (err) {
      console.log(`[error] ${err}`);
      next(err);
    } else {
      console.log('success');
      next();
    }
  })
})

module.exports = Choice = mongoose.model('choices', ChoiceSchema);
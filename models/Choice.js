const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

ChoiceSchema.pre('deleteMany', function (next) {
  const choiceId = this.getQuery()["_id"];
  VoteSchema.deleteMany({'choice_id': choiceId}, function (err) {
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
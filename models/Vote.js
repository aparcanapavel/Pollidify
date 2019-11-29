const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  choice_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  voter_id: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

VoteSchema.index({
  choice_id: 1,
  voter_id: 1
})

module.exports = Vote = mongoose.model('votes', VoteSchema);
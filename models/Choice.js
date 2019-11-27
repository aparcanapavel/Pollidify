const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  response: {
    type: String,
    required: true
  },
  poll_id: {
    type: Schema.Types.ObjectId,
    ref: 'polls'
  }
})

module.exports = User = mongoose.model('choices', UserSchema);
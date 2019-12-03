const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  voted: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'polls'
  }],
  created: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'polls'
  }]
})

module.exports = User = mongoose.model('users', UserSchema);
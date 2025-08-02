// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   role: {
//     type: String,
//     enum: ['victim', 'advocate', 'judge'],
//     required: true
//   }
// });

// module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
  barCouncilId: String // Optional, only for advocates
});

module.exports = mongoose.model('user', userSchema);

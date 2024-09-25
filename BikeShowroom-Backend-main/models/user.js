const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  roles:[{
    type: String,
    default: "Buyer",
  }],
  password: {
    type: String,
    required: true,
  },
}, {
  collection: 'userDetails' // Specify the collection name
});

const User = mongoose.model('User', userSchema);

module.exports = User;

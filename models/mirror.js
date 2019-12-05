const mongoose = require('mongoose');

const userSchema = require('./user');

const mirrorSchema = mongoose.Schema({
  deviceId: {type: String, required: true},
  description: {type: String, required: true},
  users: [userSchema],
});

const Mirror = mongoose.model('Mirror', mirrorSchema);

module.exports = mirrorSchema;

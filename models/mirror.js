const mongoose = require('mongoose');

const mirrorSchema = mongoose.Schema({
  deviceId: {type: String, required: true},
  description: {type: String, required: true},
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
});

const Mirror = mongoose.model('Mirror', mirrorSchema);

module.exports = mirrorSchema;

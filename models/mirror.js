const mongoose = require('mongoose');

const mirrorSchema = mongoose.Schema({
  deviceId: {type: String, required: true},
  description: {type: String, required: true},
});

const Mirror = mongoose.model('Mirror', mirrorSchema);

module.exports = mirrorSchema;

const mongoose = require('mongoose');

const apiKeySchema = mongoose.Schema({
  name: {type: String, required: true},
  key: {type: String, required: true},
  description: {type: String, required: true},
  securityClearance: {type: Number, required: true}
});

mongoose.model('ApiKey', apiKeySchema);

module.exports = apiKeySchema;

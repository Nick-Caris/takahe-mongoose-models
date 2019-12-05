const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
  name: {type: String, required: true},
  contentType: {type: String, required: true},
  data: Buffer,
});

mongoose.model('File', fileSchema);

module.exports = fileSchema;

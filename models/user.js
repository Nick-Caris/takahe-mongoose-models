const mongoose = require('mongoose');

const fileSchema = require('./file');
const userWidgetSchema = require('./userWidget');


const userSchema = mongoose.Schema({
  name: {type: String, required: true},
  images: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File'
  }],
  widgets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserWidget'
  }],
});

mongoose.model('User', userSchema);

module.exports = userSchema;

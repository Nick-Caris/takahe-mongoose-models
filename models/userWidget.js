const mongoose = require('mongoose');

const widgetSchema = require('./widget');

const userWidgetSchema = mongoose.Schema({
  widget: {type: widgetSchema, required: true},
  position: {type: Number, required: true},
  userData: Object,
});

mongoose.model('UserWidget', userWidgetSchema);

module.exports = userWidgetSchema;

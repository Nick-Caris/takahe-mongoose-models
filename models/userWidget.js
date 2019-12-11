const mongoose = require('mongoose');

const widgetSchema = require('./widget');

const userWidgetSchema = mongoose.Schema({
  widget: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Widget',
    required: true
  },
  active: {type: Boolean, required: true},
  userData: Object,
});

mongoose.model('UserWidget', userWidgetSchema);

module.exports = userWidgetSchema;

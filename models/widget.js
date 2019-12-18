const mongoose = require('mongoose');


const widgetSchema = mongoose.Schema({
  name: {type: String, required: true},
  url: {type: String, required: true},
  commands: [{type: String}],
  icon: String,
  description: {},
  lastModified: {type: Date, required: true},
  version: {type: String, required: true},
  apiKey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ApiKey',
    required: false,
  },
});

widgetSchema.pre('save', function (next) {
  if (this.commands === undefined) this.commands = [this.name];
  else if (!this.commands.includes(this.name)) this.commands.push(this.name);
  next();
});

mongoose.model('Widget', widgetSchema);

module.exports = widgetSchema;

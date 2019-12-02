const mongoose = require('mongoose');


require('./models/file');
require('./models/user');
require('./models/widget');
require('./models/userWidget');

const File = mongoose.model('File');
const User = mongoose.model('User');
const Widget = mongoose.model('Widget');
const UserWidget = mongoose.model('UserWidget');

const db = mongoose.connection;

mongoose.connect('mongodb://localhost/test').then(() => {
  return seedFile();
}).then(() => {
  return seedWidget();
}).then(() => {
  return seedUserWidget();
}).then(() => {
  return seedUser();
}).catch(err => {
  console.log(err);
}).then(() => {
  db.close();
});
const file = new File({name: 'test', contentType: 'image'});
const widget = new Widget({name: 'testWidget', url: 'www.google.com', lastModified: new Date(), version: '1.0'});
const userWidget = new UserWidget({widget: widget, position: 0});

seedFile = async () => {
  await File.deleteMany();

  await File.insertMany([
    file
  ])
};

seedWidget = async () => {
  await Widget.deleteMany();

  await Widget.insertMany([
    widget
  ]);
};

seedUserWidget = async () => {
  await UserWidget.deleteMany();

  await UserWidget.insertMany([
    userWidget
  ]);
};

seedUser = async () => {
  await User.deleteMany();
  const user = new User({name: 'peter', images: [file], widgets: [userWidget]});

  await User.insertMany([
    user
  ]);
};

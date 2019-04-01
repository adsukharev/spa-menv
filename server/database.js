var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/api', {useNewUrlParser: true, useFindAndModify: false });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected to mongoDB!');
  console.log('listening on port 3333...');
});


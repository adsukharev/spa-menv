var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/api_sukharev', {useNewUrlParser: true, useFindAndModify: false });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected to mongoDB!');
});

// To load and start the MongoDB background service, open Terminal and execute the following commands :
//
// Install brew services first : $ brew tap homebrew/services
// Load and start the MongoDB service : $ brew services start mongodb.
// Expected output : Successfully started mongodb (label: homebrew.mxcl.mongodb)
//
// Check of the MongoDB service has been loaded : $ brew services list 1
//
// Verify the installed MongoDB instance : $ mongod --version.
// Expected output : db version v3.2.10

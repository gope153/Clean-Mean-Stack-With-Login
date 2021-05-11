const mongoose = require('mongoose');
mongoose.connect('mongodb://user:i3otn32iog@cluster0-shard-00-00.db6kh.mongodb.net:27017,cluster0-shard-00-01.db6kh.mongodb.net:27017,cluster0-shard-00-02.db6kh.mongodb.net:27017/placons?ssl=true&replicaSet=atlas-12l0c6-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	// we're connected!
	console.log("connect");
});

//Require Mongoose

//Define a schema
require('./models')

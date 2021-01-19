const mongoose = require('mongoose');
mongoose.connect('mongodb://kuhn:1Ki6s5ivf-@cluster0-shard-00-00.tatxj.mongodb.net:27017,cluster0-shard-00-01.tatxj.mongodb.net:27017,cluster0-shard-00-02.tatxj.mongodb.net:27017/db1?ssl=true&replicaSet=atlas-q7uzck-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	// we're connected!
	console.log("connect");
});

//Require Mongoose

//Define a schema
require('./models')

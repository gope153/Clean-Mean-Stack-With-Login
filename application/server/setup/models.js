const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
	email: {
		type: String,
		required: '{PATH} is required!',
		unique: true
	},
	salt: String,
	hashed_pwd: String,
});

userSchema.methods = {
	authenticate: function (passwordToMatch) {
		return bcrypt.compareSync(passwordToMatch, this.hashed_pwd);
	}
};
mongoose.set('useCreateIndex', true);
userSchema.index({ email: 1 });
var create = mongoose.model('users', userSchema);
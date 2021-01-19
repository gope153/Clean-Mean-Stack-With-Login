const mongoose = require('mongoose');
const path = require('path')
const userModel = mongoose.model('users');
const allowedExt = require(path.resolve('./application/server/setup/extensions'))
const newLogger = console;
require('./../assets/extraFunctions')


module.exports = {
	getUser: (req, res) => {
		console.info("CALLING", (new Error().stack.split("at ")[1]).trim());
		res.send(req.user)
	},
	sendIndex: (req, res) => {
		if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
			res.sendFile(path.resolve('./application/public/front-end/dist/front-end/' + req.url));
		} else {
			console.info("CALLING", (new Error().stack.split("at ")[1]).trim());
			res.sendFile(path.resolve('./application/public/front-end/dist/front-end/index.html'));
		}
	}
}
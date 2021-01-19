const express = require('express'),
	logger = require('morgan'),
	bodyParser = require('body-parser');
const allowedExt = require('./extensions')

module.exports = (app) => {
	app.use(logger('dev',
		{
			skip: function (req, res) {
				return (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) || req.url.indexOf('files') > -1
			}
		}
	));

	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
		res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type, Cache-Control, Authorization, x-access-token, application");
		next();
	});

	app.use(bodyParser.json({ limit: '50mb' }));
	app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

	/// catch 404 and forwPard to error handler

}
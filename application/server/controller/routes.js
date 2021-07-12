const express = require('express');
const router = express.Router();
const controller = require('./controller')
const auth = require('./auth')
const path = require('path')

router.get('/api/user', auth.getUser, controller.getUser)
router.get('/api/users', auth.getUser, controller.getAllUser)
router.post('/api/user', auth.createUser)

router.post('/login', auth.authenticate)

router.get('/*', controller.sendIndex);

module.exports = router;
const express = require('express');
const route = express.Router();
const userControllerCall = require('../controller/userController')


route.get('/api/users', userControllerCall.getUser)


module.exports = route;
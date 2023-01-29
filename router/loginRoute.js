const express = require('express');
const router = express.Router()
const loginObjCall = require('../controller/loginController')

router.post('/login',  loginObjCall.loginUser)

module.exports = router;
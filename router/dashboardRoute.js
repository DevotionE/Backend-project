const { application } = require('express')
const express = require('express')
const router = express.Router()


const dashboardRouteCall = require('../controller/dashboardController')
router.get('/dashboard', dashboardRouteCall.dashboard)
router.get('/index', dashboardRouteCall.index)

module.exports = router

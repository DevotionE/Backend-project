const express = require('express');
const userService = require('../services/userService')
const fs = require('fs')


const userControllerObj = {
    getUser: (req, res) => {
        return userService.readUserFile
    }
}


module.exports = userControllerObj;
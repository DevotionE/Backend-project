const jwt = require('jsonwebtoken');

require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY

const verifyUserLogin = (req, res, next) => {
    const token = req.header["auth-token"]
    const tokenChecker = req.body.token || req.query.token || req.headers["x-access-token"];
    console.log(tokenChecker)
    if (!token) {
        return res.send("Invalid Token")
    }
}

module.exports = verifyUserLogin
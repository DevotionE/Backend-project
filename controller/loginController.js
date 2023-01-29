const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY

const loginControllerObj = {
    loginUser: async (req, res) => {
        const userDetails = req.body;
        const token = jwt.sign(userDetails, SECRET_KEY)
        userDetails.token = token
        console.log(userDetails)
        const tokenChecker = req.body.token || req.query.token || req.headers["x-access-token"];
        console.log(tokenChecker)
        const isValid = !tokenChecker ? res.redirect("/loginPage") : res.redirect("/dashboard")
        return isValid
    },
    deleteUser: (req, res) => {
        return res.json({ "msg": "User deleted" })
    },
    loginPage: (req, res) => {
        res.render("home")
    }
}



module.exports = loginControllerObj;
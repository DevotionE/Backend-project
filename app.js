
const express = require("express");
const path = require('path')
const userRouteCall = require('./router/userRoute')
const app = express();

const loginObjCall = require('./router/loginRoute')
//Loads the handlebars module
const exphbs = require('express-handlebars');

const dashboardRoute = require('./router/dashboardRoute');

app.use(express.json())
app.use(express.urlencoded({ extended: false} ))



app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', '.hbs');

app.use(express.static('public'))

app.use(loginObjCall)

app.use(userRouteCall)

app.use(dashboardRoute)
const PORT = 3000;

app.get('/', (req, res) => {
    res.render('home')
})


app.listen(PORT, (req, res) => {
    console.log(`App listening on PORT ${PORT}`);
});
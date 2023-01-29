const dashBoardControllerObj ={
    dashboard: (req, res) => {
        res.render('dashBoard', { layout: false });
    },
    index: (req, res) => {
        res.render('index', { layout: false});
    }
}


module.exports = dashBoardControllerObj
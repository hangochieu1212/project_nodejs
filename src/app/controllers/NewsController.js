const Course = require('../model/Course');
class NewsController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('26102001');
    }
    detail(req, res) {
        res.send('chi tiết bảng tin');
    }
}

module.exports = new NewsController();

//const newsController = require('./New');

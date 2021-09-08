//const mongoose = require('mongoose');
const Course = require('../model/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //lay du lieu hien thi cho client
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                courses = courses.map((course) => course.toObject());
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })

            .catch(next);
    }

    search(req, res, next) {
        res.send('hello');
    }
}
module.exports = new SiteController();
//module.exports = mongoose.model('Course', Course,'hieu1212_dev');

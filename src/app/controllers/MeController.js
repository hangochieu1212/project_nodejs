const Course = require('../model/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const List = require('../model/List');
class MeController {
    storedCourses(req, res, next) {
        Course.find({}).then((courses) => {
            courses = courses.map((course) => course.toObject());
            res.render('me/storedCourses', {
                courses: mutipleMongooseToObject(courses),
            });
        });
        
    }
    exit(req, res, next) {
        res.render('me/exit');
    }
    storedLists(req,res,next)
    {
        List.find({})
        .then(lists =>res.render('me/stored-lists' ,{
            lists: mutipleMongooseToObject(lists)

        }))
        .catch(next);
            
        
    }
    trashLists(req,res,next)
    {
        List.findDeleted({})
        .then(lists =>res.render('me/trash-lists' ,{
            lists: mutipleMongooseToObject(lists)

        }))
        .catch(next);
    }
}
module.exports = new MeController();

//module.exports = mongoose.model('Course', Course,'hieu1212_dev');

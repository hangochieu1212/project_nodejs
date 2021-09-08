const Course = require('../model/Course');
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');
class CourseController {
    //lay du lieu hien thi cho client

    /*test(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(
                (course) =>
                    res.render('courses/show', {
                        course: mongooseToObject(course),
                    }),
                //res.json(course)
                //res.send('hello')
            )
            .catch(next);
        //res.send('test-'+req.params.slug);
    }
    */
    //create(req, res, next) {
    //res.render('/course/create');
    //}
    create(req, res, next) {
        res.render('courses/create');
    }
    //POST:STORED
    stored(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});

        //res.json(req.body);
    }
    //[GET] /courses/:id/edit
    edit(req, res, next) {
        //res.send('hello');
        Course.findById(req.params.id)

            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }
    //PUT /courses:id
  

    logout(req, res, next) {
        res.render('me/logout');
    }
    index(req, res, next) {
        Course.find({})
        .then(courses => {
            //courses = courses.map(course => course.toObject());
            res.render('home',{
                courses:mutipleMongooseToObject(courses)
            });
        })
        .catch(next);
    }
    show(req,res,next)
    {
         Course.findOne({slug: req.params.slug})
         .then(courses=> {
            res.render('courses/show',{
                courses: mongooseToObject(courses)
            });
         })
         .catch(next);
        //res.send('HELLO');
    }
}

module.exports = new CourseController();
//module.exports = mongoose.model('Course', Course,'hieu1212_dev');

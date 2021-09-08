const newsRouter = require('./news');
const siteRouter = require('./site');
//const coursesRouter = require('./courses');
const meRouter = require('./me');
const testRouter = require('./test');
const listRouter =require('./list');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    //app.use('/courses', coursesRouter);
    //app.use('/', coursesRouter);
    app.use('/', siteRouter);
    app.use('/lists',listRouter);
    app.use('/me' ,meRouter);
}


module.exports = route;

const { mutipleMongooseToObject } = require("../../util/mongoose");
const Test = require("../model/Test");



class TestController {
    test(req,res,next)
    {
       
        
        Test.find({})
        .then(lists => res.render('tests/test' ,{
            lists: mutipleMongooseToObject(lists)
        }))
        .catch(next);
}
}
module.exports = new TestController();

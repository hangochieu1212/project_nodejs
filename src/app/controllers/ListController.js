const { mutipleMongooseToObject, mongooseToObject } = require("../../util/mongoose");
const List = require("../model/List");
//const Test = require('../model/List');


class ListController {
    demo(req ,res,next)
    {

      List.find({})
        .then(lists => res.render('lists/demo', {
            lists: mutipleMongooseToObject(lists)
        }))
        .catch(next);
    }
 //[GET] ADD
    add(req,res,next)
    {
        res.render('lists/create');
    }
    //[POST]/STORE
    store(req,res,next)
    {
        
        
        const formData =  req.body;
        //console.log(formData);
        const list = new List(formData);
        list.save()
    
        .then(() => res.redirect(`/lists/chi-tiet`))
        .catch(error => {
    
    });
}
    //[GET] lists/:id/edit
    edit(req,res,next)
    {
        List.findById(req.params.id)
        .then(lists => res.render('lists/edit' ,{
        lists: mongooseToObject(lists)
        }))
       
      .catch(next)
    }
    update(req,res,next)
    {
        List.updateOne({_id: req.params.id} ,req.body)
        .then(()=> res.redirect(`/me/stored-lists`))
        .catch(next);
        //res.json(req.body);
        //console.log(req.body);
    }
    //[DELETE] /lists/:id
    delete(req,res,next)
    {
        List.delete({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)

    }
    restore(req,res,next)
    {
        List.restore({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }
    forcedelete(req,res,next)
    {
        List.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)

    }
    

}
module.exports = new ListController();

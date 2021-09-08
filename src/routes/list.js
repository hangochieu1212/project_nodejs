const express = require('express');
const ListController = require('../app/controllers/ListController');
const router = express.Router();
const listController = require('../app/controllers/ListController');
router.get('/chi-tiet', listController.demo);
router.get('/create' ,listController.add);
router.post('/store' ,listController.store);
router.put('/:id', listController.update);
router.patch('/:id/restore', listController.restore);
router.delete('/:id/force' ,listController.forcedelete);
router.delete('/:id' ,listController.delete);
router.get('/:id/edit' ,listController.edit);
//router.delete('/:id' ,listController.delete);



module.exports = router;
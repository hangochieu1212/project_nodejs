const express = require('express');
const router = express.Router();

const testController = require('../app/controllers/TestController');

router.get('/danh-sach',testController.test);
//router.get('/', siteController.index);

module.exports = router;

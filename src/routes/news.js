const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.use('/:bang-tin/chi-tiet-bang-tin', newsController.detail);
router.use('/:bang-tin', newsController.show);
router.use('/', newsController.index);

module.exports = router;

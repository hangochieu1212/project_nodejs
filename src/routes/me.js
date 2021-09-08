const express = require('express');
//const CourseController = require('../app/controllers/CourseController');
//const MeController = require('../app/controllers/MeController');
const router = express.Router();
const meController = require('../app/controllers/MeController');

router.get('/storedCourses', meController.storedCourses);
router.get('/stored-lists',meController.storedLists);
router.get('/exit', meController.exit);
router.get('/trash-lists',meController.trashLists);

module.exports = router;

const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/:id', courseController.update);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.get('/', courseController.index);
//router.get('/data', courseController.data);

// Còn gì nữa không
// t sai ở chỗ nào thế
// T còn không nhớ mình mới sửa gì
//^^,bạn ra fb t hỏi xíu
// OK


module.exports = router;

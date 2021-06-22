const router = require('express').Router();
const CoursesCtrl = require('../controllers/CoursesCtrl');


router.post('/add', CoursesCtrl.addCourse);

router.get('/get',CoursesCtrl.getCourses);
router.get('/get/:id',CoursesCtrl.getCourse);

module.exports = router
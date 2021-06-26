const router = require('express').Router();
const CoursesCtrl = require('../controllers/CoursesCtrl');


router.post('/add', CoursesCtrl.addCourse);
router.patch('/update/:id',CoursesCtrl.updateCourse);

router.get('/get',CoursesCtrl.getCourses);
router.get('/get/:id',CoursesCtrl.getCourse);

router.delete('/delete/:id',CoursesCtrl.deleteCourse)

module.exports = router
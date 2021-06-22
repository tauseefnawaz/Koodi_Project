const course = require('../modelling/courses')

const CoursesCtrl = {
    addCourse: async (req, res) => {
        try {
            const newCourse= new course({
                name:req.body.name,
                description:req.body.description,
                teacherName : req.body.teacherName,
                teacherIntroduction : req.body.teacherIntroduction,
                teacherQualification : req.body.teacherQualification,
                image:req.body.image
            });

            await newCourse.save();
            res.json({msg: "Courses Added Successfully"})
        } catch (err) {
            console.error(err);
            res.status(500).send();
        }
    },
    getCourses : async(req,res)=>{
        try {
            const courses = await course.find().select('-password')

            res.json(courses)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getCourse : async(req,res)=>{
        try {
            const cours = await course.findById(req.params.id, function (err, crs) {
                res.json(crs);
                });
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

}

module.exports = CoursesCtrl
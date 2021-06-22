const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var CourseSchema = new Schema({
    name:{type:String ,required: true},
    startDate:{type:Date ,default: Date.now},
    image:{type:String ,required:true},
    description : {type:String ,required:true},
    teacherName:{type:String,required:true},
    teacherIntroduction:{type:String,required:true},
    teacherQualification:{type:String,required:true}
});

// Compile model from schema
module.exports = mongoose.model('Courses', CourseSchema );

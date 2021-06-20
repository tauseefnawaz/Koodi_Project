const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username:{type:String ,required: true},
    Name:{type:String ,required: true},
    password:{type:String ,required:true},
    email : {type:String ,required:true},
    phoneNumber:{type:String ,required:true}
});

// Compile model from schema
module.exports = mongoose.model('UserModel', UserSchema );

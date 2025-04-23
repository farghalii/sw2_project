const mongoose =require('mongoose');

const userSchema=mongoose.Schema({
       name:{
        type:String,
        required:true
       },
       email:{
        type:String,
        required:true
       },
       passwordHash:{
        type:String,
        required:true
       },
       phone:{
        type:String,
        required:true
       },
       isAdmin:{
        type:Boolean,
        default:false
       }
});

module.exports = mongoose.model('Users',userSchema);

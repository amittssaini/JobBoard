const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName :{type:String},
    lastName:{type:String},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true}
},{timestamps:true});

const userModel = mongoose.model("users",userSchema);
module.exports=userModel;
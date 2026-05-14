//fields in form  are called model 

import mongoose from "mongoose";  //.connect- to connect  //.Schema()  to create Schema
const userSchema=new mongoose.Schema({
 name:{
    type:String,
    required:true,   
 },

 email:{
    type:String,
    required:true,
    unique:true
 },

 age:{
    type:Number,
    required:true,
 }

})

const User=mongoose.model("User",userSchema)

export default User
const { trim } = require("lodash");
const mongoose = require("mongoose");
mongoose.connect("").then(()=>
{
    console.log("Connection successfull");
}).catch((err)=>{
    console.log(`No connection ${err}`);
})
const signupschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
})
const Student = mongoose.model("Register" , signupschema);
model.exports= Student;
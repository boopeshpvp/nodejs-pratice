const { Validator } = require("node-input-validator")
const User=require('../Models/publiccredentials')
exports.register=async(req,res)=>{
//validation for input field
const v=new Validator(req.body,{
    // first_name:'required|minLength:2|maxLength:100',
    email:'required|email',
    password:'required'     
})
//check the validation
const matched =await v.check();//return a promise
//if validation fails
if(!matched){
    return res.status(422).send(v.errors)
}
try{
const newuser=new User({
    // first_name:req.body.first_name,
    email:req.body.email,
    password:req.body.password
})
console.log("newuser",newuser);
// let userData=await newuser.save();

return res.status(200).send({
    message:"registeration successfull",
    data:await newuser.save()
})
}

catch(error){
    console.log("error",error);
  return res.status(400).send({
    message:error.message,
    data:error
   })
}

    
}
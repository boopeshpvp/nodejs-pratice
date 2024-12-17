const mongoose=require('mongoose')
const Schema=mongoose.Schema
//to encrypt the password we use bcrypt
const bcrypt=require('bcrypt')

const userDetailsScheme= new Schema({
      email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
      },
      password:{
        type:String,
        required:true
      },
    //   first_name:{
    //     type:String,
    //     required:true
    //   }
})

//this middleware happen before saving the user
//here we set encrypted value for password
//pre function means it happen before saving
userDetailsScheme.pre('save',async function (next){
try{
    const salt= await bcrypt.genSalt(10)//this give 10 encrypted characters
    const hashPassword=await bcrypt.hash(this.password,salt)
    this.password=hashPassword;
    next();
}
catch(error){
    next(error)
}
})

//this check given password and encrypted password is same 
userDetailsScheme.methods.isValidPassword=async function (password){
    try{
        return await bcrypt.compare(password,this.password)
    }
    catch(error){
throw error
    }
}

//here we set user details in database
//first collectiondataname second userdetails
const User=mongoose.model('userData',userDetailsScheme)
module.exports=User;


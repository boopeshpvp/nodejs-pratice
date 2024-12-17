const mongoose=require('mongoose')
const Schema=mongoose.Schema
 //ID generated by mongo db initially for avoid that we need to generate custom id 
 const customId=generateCustomID()

 const userDetailsScheme=new Schema({
    _id:{
        type:Number,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,    
    },
    job:{
        type:String,
        required:true
    },
    profile_img:{
        type:String,
        required:true
    }
 })

 //set teh custom id before save
 userDetailsScheme.pre('save',function(next){
      // If _id is not set or is not a number, generate a new custom ID
    if(!this._id||typeof this._id!=="number"){
        this._id=generateCustomID()
    }
    next()
 })

 //function to genarate 6-digit random id
 function generateCustomID(){
    return Math.floor(100000+Math.random()*900000);
 }

 //here we set user details in database
//first collectiondataname second userdetails
 const Users=mongoose.model('privateUserData',userDetailsScheme)
 module.exports=Users;
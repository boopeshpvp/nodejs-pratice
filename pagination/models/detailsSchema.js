const mongoose=require('mongoose')

const Schema=mongoose.Schema

const details=new Schema({
    id:{
        type:String,
        required:true
    },
    name:String,
    description:String
})

const detail=mongoose.model('pages',details)
module.exports=detail;

const Handleerror=require('http-errors')

const mongoose=require('mongoose')

const Users=require('../Models/privatecredebtials')

module.exports={
    getAllUsers:async(req,res,next)=>{
        try{
            const result=await Users.find({},{_v:0});//find method have two parameter 1)query 2)projection

            //pass required feild as 1 and not required as 0
            res.send(result)
        }
        catch(error){
            console.log("error",error.message);
        }
    },

    createUser:async(req,res,next)=>{
        try{
           const users=new Users(req.body)
           const result=await users.save();
           res.send(result)
        }
        catch(error){
            console.log(error.message);
            if(error.name==="ValidationError"){
                next(Handleerror(422,error.message))
            }
        }
    },
    getUserById:async(req,res,next)=>{
        const id=req.params.id
    try{
      const user=await Users.findById(id)//find by id method

    //   const users=await Users.findOne({_id:id})  //find by one method

    if(!user){
        throw Handleerror(404,"users id does not exists!!")
    }
    res.send(user)
    }
    catch(error){
        console.log("error",error);
        //if we give any alpabet or special character in id mongodb use this instance error.
        if(error instanceof mongoose.CastError){
           return next(Handleerror(400,"Invalid User ID"))
        }
        next(error)//this is optional, this is used to pass error for nested component. 
    }
    },

    updateUserById:async(req,res,next)=>{
        try{
            const id=req.params.id
            const update=req.body

            const option={new:true} //optional parameter it return true new object is added

            const result=await Users.findByIdAndUpdate(id,update,option)//this function take three parameter
            if(!result){
                throw(Handleerror(404,"user does not exit "))
            }
            res.send(result)
        }
        catch(error){
            console.log("error",error.message);
            if(error instanceof mongoose.CastError){
                next(Handleerror(400,'Invalid user Id'))
                return;
            }
            next(error)//optional
        }
    },
    deleteUserById:async(req,res,next)=>{
       const id=req.params.id
       try{
        const result=await Users.findByIdAndDelete(id)
        if(!result){
            next(Handleerror(404,'user does not exists'))
        }
        res.send(result)
       }
       catch(error){
        console.log("error",error.message);
        if(error instanceof mongoose.CastError){
            next(Handleerror(400,'Invalid user Id'))
            return;
        }
        next(error)//optional
       }
    }
}
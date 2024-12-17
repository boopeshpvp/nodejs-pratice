const mongoose = require("mongoose");

module.exports = () => {
  //connect is middle ware used to connect Db
  //firs connection string second db name
  mongoose.connect("mongodb://localhost:27017/api_application",{
    family:4
  })
  .then(()=>{
    console.log("the db is connected");
  })
  .catch(error=>{
    console.log("error",error.message);
  })


  //moongose event
  //optional (if then is not worked we can use mongoose event)
mongoose.connection.on("connection",()=>{
    console.log("Mongoose connected to database");
})
mongoose.connection.on("error",(error)=>{
    console.log("error",error);
})
mongoose.connection.on("disconnected",()=>{
    console.log("Mongoose is disconnected");
})

};

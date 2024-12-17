const express=require("express")
const app=express()
const error =require("http-errors")
require('dotenv').config()
const bodyParser=require('body-parser')
require('./helpers/extend-node-input-validator')
//convert payload into json format
//use is the middleware
app.use(express.json())
//encode the given data and use it query string
app.use(bodyParser.urlencoded({extended:true})) 
//initailize the data base
require('./initDB')()

const UserRoute=require('./Routes/userroutes')
app.use('/users',UserRoute)

const AuthRoute=require('./Routes/authroutes')//import routes
app.use('/auth',AuthRoute)

app.get('/',async(req,res,next)=>{
    res.send({"new message":"our first component"})
})

const PORT=process.env.PORT;
app.listen(8000,()=>{
    console.log(`server is started on port 8000`);
})
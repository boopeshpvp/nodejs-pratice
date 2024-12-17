const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();
require("./helpers/init_mongodb");
const {verifyAccessToken} = require("./helpers/jwt_helper");

const AuthRoute = require("./Routes/authRoutes");


const app = express();
app.use(morgan('dev'))

app.use(express.json());
//to encode given request and change it as query string
app.use(express.urlencoded({extended:true}))


//*** Initialize the Data Base  */
require("./initDB")()

// testing purpose.
app.all("/test",(req,res)=>{
    // console.log(req.query);
    // console.log(req.query.name);
    // res.send(req.query)
    // console.log(req.params);
    // console.log(req.params.name);
    // res.send(req.params);

    res.send(req.body)
})

const usersRoutes = require("./Routes/usersRoutes")
app.use("/users", usersRoutes);

app.get("/",verifyAccessToken,async (req,res,next)=>{
    res.send("Home page of the application")
})
app.use("/auth",AuthRoute)

// error handler ( but this not proper way)
app.use((req,res,next)=>{
    // res.status(404);
    // res.send({
    //     error:"Not found"
    // })

    // const err = new Error("Not found");
    // err.status = 404;
    // next(err);
    if(!usersRoutes){
        next(createError(404,"Not Found"))
    }
    next(createError.NotFound("This route doesn't exist!!"))
})

// error handler
app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send({
        error:{
            status:err.status || 500,
            message: err.message
        }
    })
})


// app.use(async(req,res,next)=>{
//     // const error = new Error("Not found");
//     // error.status = 404;
//     // next(error);

// })
// app.get("/", (req,res,next)=>{
//     console.log(req.url);
//     console.log(req.method);
//     res.send("Home page of the application")
// })

const PORT = process.env.PORT;
// const PORT = 5000;
app.listen(7000, ()=>{
    console.log(`server is started on the ${PORT}...`);
})
const nodemailer = require('nodemailer');
// const express=require('express');
// const app=express()
// const PORT=process.env.PORT||5000
// const approutes=require('./router/route')

// app.use(express.json())
// //you need to use the route after the endpoint declaration
// app.use('/api',approutes)

let mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tboopesh7@gmail.com',
    pass: 'folm sjje fuob mfvs',
  },
});

let mailprocess={
    from:'tboopesh7@gmail.com',
    to:'ganapathy.n@mitrahsoft.com',
    subject:'checking the network',
    text:'your network is good'
}

mail.sendMail(mailprocess,function(error,info){
    if(error){
        console.log('error',error);
    }
    else{
      console.log('email',info.response);
    }
})

// app.listen(PORT,()=>{
//     console.log("server is running");
// })



const nodemailer = require('nodemailer');

let mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tboopesh7@gmail.com',
    pass: 'folm sjje fuob mfvs',
  },
});

let mailprocess={
    from:'tboopesh7@gmail.com',
    to:'boopesh.t@mitrahsoft.com',
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



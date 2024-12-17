const router=require('express').Router()
const {signup,getbill}=require('../mailer/controller/appcontroller.js')
//here we can give our own endpoints
//then we specify our controller with req and res
//instead of contrller in route file you can have it in new folder controller
router.post('/user/signup',signup)
router.post('/products',getbill)


module.exports=router;
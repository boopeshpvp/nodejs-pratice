const express=require('express')
const router=express.Router()
const error=require('http-errors')

const authControllers=require('../Controllers/authControllers')

router.post('/register',authControllers.register)


module.exports=router;
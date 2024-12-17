const express=require('express')
const router=express.Router();

const userControllers=require('../Controllers/usersControllers')

//to get all user
router.get('/',userControllers.getAllUsers)

//to create user
router.post('/',userControllers.createUser)

//get user by id
router.get('/:id',userControllers.getUserById)

//update user by id
router.patch('/:id',userControllers.updateUserById)

//delete user by id
router.delete('/:id',userControllers.deleteUserById)

module.exports=router
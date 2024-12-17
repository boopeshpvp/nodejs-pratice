const express = require("express");
const router = express.Router();

// const mongoose = require("mongoose");

// const Product = require("../Models/productModels");

const UsersControllers = require("../Controllers/usersControllers"); 

//***get all the Users  list */
router.get("/", UsersControllers.getAllUsers)

//***create a new user */
router.post("/", UsersControllers.createNewUser)

//***get a user by id */
router.get("/:id", UsersControllers.findUserById)

//***update a user by id */
router.patch("/:id", UsersControllers.updateUserById)

//***delete a user by id */
router.delete("/:id", UsersControllers.deleteUserById);

module.exports = router;
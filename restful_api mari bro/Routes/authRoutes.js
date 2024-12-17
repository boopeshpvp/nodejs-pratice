const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../Models/usercredentialsModels");
const { authSchema } = require("../helpers/validations_schema");
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require("../helpers/jwt_helper");

router.post("/register", async (req, res, next) => {
    try {
        // const { email, password } = req.body
        // if (!email || !password) throw createError.BadRequest();
        const result = await authSchema.validateAsync(req.body);

        const doesExist = await User.findOne({ email: result.email })
        if (doesExist) throw createError.Conflict(`${result.email} is already been registered`);

        const user = new User(result)
        const savedUser = await user.save();
        const accessToken = await signAccessToken(savedUser.id)
        const refreshToken = await signRefreshToken(savedUser.id)
        res.send({ accessToken, refreshToken })
    }
    catch (error) {
        if (error.isJoi === true) error.status = 422
        next(error);
    }
})

router.post("/login", async (req, res, next) => {
    try {
        const result = await authSchema.validateAsync(req.body)
        const user = await User.findOne({ email: result.email })
        if (!user) throw createError.NotFound("user not registered")

        const isMatch = await user.isValidPassword(result.password)
        if (!isMatch) throw createError.Unauthorized("Username/Password not valid")

        const accessToken = await signAccessToken(user.id)
        const refreshToken = await signRefreshToken(user.id)

        res.send({ accessToken, refreshToken })
    }
    catch (error) {
        if (error.isJoi === true) return next(createError.BadRequest("Invalid Username/Password"))
        next(error)
    }
})

router.post("/refresh-token", async (req, res, next) => {
    try {
        const { refreshToken } = req.body
        if (!refreshToken) throw createError.BadRequest()
        const userId = await verifyRefreshToken(refreshToken)

        const accessToken = await signAccessToken(userId)
        const refToken = await signRefreshToken(userId)
        res.send({ accessToken: accessToken, refreshToken: refToken })
    }
    catch (error) {
        next(error)
    }

    // res.send("refresh token route")
})

router.delete("/logout", async (req, res, next) => {
    // try{
    //     const { refreshToken } = req.body
    //     if(!refreshToken) throw createError.BadRequest()
    //     const userId = await verifyRefreshToken(refreshToken)
    // }
    // catch(error){
    //     next(error)
    // }
    // res.send("this is deleting section")
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) throw createError.BadRequest("Refresh token is required.");

        const userId = await verifyRefreshToken(refreshToken);

        const user = await User.findById(userId);
        if (user) {
            user.lastLogout = new Date();
            user.tokens = []; 
            await user.save();
        }

        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        next(error);
    }
}) 

module.exports = router;
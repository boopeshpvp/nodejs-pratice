const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// this middleware fired before saving the user
UserSchema.pre('save',async function (next){
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword;
        next()
        // console.log("called before saving a user");
    }
    catch(error){
        next(error)
    }
})

// another middleware fired after saving the user
// UserSchema.post('save',async function (next){
//     try{
//         console.log("called after saving a user");
//     }
//     catch(error){
//         next(error)
//     }
// })

UserSchema.methods.isValidPassword = async function(password){
    try{
       return await bcrypt.compare(password, this.password)
    }
    catch(error){
        throw error
    }
}

const User = mongoose.model('usercredentials', UserSchema);
module.exports = User;
const mongoose = require("mongoose");
const Schema = mongoose.Schema
const customId = generateCustomId();
console.log(customId);
const UsersSchema = new Schema({
    _id: {
        type: Number, 
        unique: true, 
    },
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    },
    profile_img: {
        type: String,
        required: true,
    }
});

// Set the custom ID before saving the document
UsersSchema.pre('save', function (next) {
    // If _id is not set or is not a number, generate a new custom ID
    if (!this._id || typeof this._id !== 'number') {
        this._id = generateCustomId();
    }
    next();
});

// Function to generate a 6-digit random ID
function generateCustomId() {
    return Math.floor(100000 + Math.random() * 900000);
}

const Users = mongoose.model('users', UsersSchema);
module.exports = Users;
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    myFile: {
        type: String,
    },
    first_name: {
        type: String,
        required: [true, 'First name is required']
    },
    last_name: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required field'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    birthday: {
        type: String,
        required: [true, 'Select your birthday date']
    } ,
    avatar: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema);
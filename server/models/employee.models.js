const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, 'Must be longer than 2 characters']
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'email must be unique'],
        minlength: [5, 'Must be longer than 2 characters'],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    avail: {
        type: String,
        minlength: [2, 'Must be longer than 2 characters']
    },
    note: {
        type: String,
        maxLength: [255, 'Body max of 255 characters']
    }
}, { timestamps: true });





module.exports = mongoose.model('employee', EmployeeSchema);
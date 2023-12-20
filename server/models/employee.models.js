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
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
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

// Additional model definitions and usage


EmployeeSchema.virtual('confirmPassword')
.get( () => this.confirmPassword )
.set( value => this.confirmPassword = value );

EmployeeSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
  });
  
  EmployeeSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });




module.exports = mongoose.model('employee', EmployeeSchema);
const employee = require('../models/employee.models');
const jwt = require("jsonwebtoken");
const secret = process.env.FIRST_SECRET_KEY;
const bcrypt = require('bcrypt');

module.exports ={
    // create
    createEmployee: (req, res) => {
        employee.create(req.body)
            .then(newEmployee => res.json(newEmployee))
            .catch((err => res.status(400).json(err)));
                },

                
    // read
    AllEmployee: (req, res) => {
        employee.find()
            .then(allEmployee => res.json(allEmployee))
            .catch((err => res.json(err)));
            },

    // read one
    getOneEmployee: (req, res) => {
        employee.findById(req.params.id)
            .then(oneEmployee => res.json(oneEmployee))
            .catch(err => res.json(err));
    },
    
    // update, add in validator function

    updateEmployee: (req, res) => {
        employee.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updateEmployee => res.json(updateEmployee))
        .catch((err => res.status(400).json(err)));
                },
        // .catch(err => res.json(err));
    // },
    // delete
    deleteEmployee: (req, res) => {
        employee.findByIdAndDelete(req.params.id)
        .then(deleteEmployee => res.json(deleteEmployee))
        .catch(err => res.json(err));
    },


    register: async (req, res) => {
        try{
            const potentialEmployee = await employee.findOne({email: req.body.email})
            if(potentialEmployee){
                res.status(400).json({message: "Email already exists"})
        }else{
            const newEmployee = await employee.create(req.body);
            const employeeToken = jwt.sign({_id: newEmployee.id, email: newEmployee.email}, secret, {expiresIn: "2h"});
            res.status(201).cookie('employeetoken', employeeToken, {httpOnly: true, maxAge: 2*60*60*1000}).json({newEmployee});
        }
    }catch(error){
        res.status(400).json({message: "Something went wrong", error: error})
    }
    },



    //Login
    login: async (req, res) => {
        console.log(req.body);
        try{
            const currEmployee = await employee.findOne({email: req.body.email});
            
            if(currEmployee){
                console.log(currEmployee);
                const passwordsMatch = await bcrypt.compare(req.body.password, currEmployee.password);
                console.log(passwordsMatch);
                if(passwordsMatch){
                    const employeeToken = jwt.sign({_id:employee._id, email:employee.email}, secret, {expiresIn: "2h"});
                    res.cookie('employeetoken', employeeToken, {httpOnly: true}).json({message: "Successfully logged in"});        
                }else{
                    res.status(400).json({message: "Invalid login attempt"});
                }
        }
            else{
                res.status(400).json({message: "Invalid login attempt"});
            }
        }catch(error){
            res.status(400).json({message: "Something went wrong", error: error})
        }
    },

    
    
    
    //Logout
    logout: (req, res) => {
        res.clearCookie('employeetoken');
        res.sendStatus(200);
    },
    AllEmployee: (req, res) => {
        employee.find()
            .then(allEmployee => res.json(allEmployee))
            .catch((err => res.json(err)));
            },
}
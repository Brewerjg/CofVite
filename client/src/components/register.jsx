import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Neon from '../assets/neonCoffee.jpg'

const Register = () => {
    const [newEmployee, setNewEmployee] = useState({ 
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      const navigate = useNavigate();
    
      const changeHandler = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
      }
    
    
      const registerHandleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', newEmployee)
                .then(res=>{
                    console.log(res.data);
                    navigate('/dashboard');
                    
                })
                .catch((err) => {
                    console.log(err)
                    navigate('/dashboard')
            }); 
        }
  return (
    <div className='flex justify-center align-middle p-[20rem]'>
      <img className='login-pic' src={Neon} alt="" />
        <div className="card">
          <div className="card-header">
            <div className="text-header">Register</div>
          </div>
          <div onSubmit={registerHandleSubmit} className="card-body ">
            <form action="#">
              <div className="form-group">
                <label for="name">Name:</label>
                <input required="" className="form-control" onChange={changeHandler} value={newEmployee.name} name="name" id="name" type="text"/>
              </div>
              <div className="form-group">
                <label for="email">Email:</label>
                <input required="" className="form-control" onChange={changeHandler} value={newEmployee.email} name="email" id="email" type="email"/>
              </div>
              <div className="form-group">
                <label for="password">Password:</label>
                <input required="" className="form-control" onChange={changeHandler} value={newEmployee.password} name="password" id="password" type="password"/>
              </div>
              <div className="form-group">
                <label for="confirm-password">Confirm Password:</label>
                <input required="" className="form-control" onChange={changeHandler} value={newEmployee.confirmPassword} name="confirmPassword" id="confirmPassword" type="password"/>
              </div>
              <div className="form-group flex justify-center">
                    <input type="submit" className="btn" value="submit"/>   
            </div> 
            </form>
            <div className='mt-4'>
                <Link className='p-8 ' to="/login">Already an Employee? Click here</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
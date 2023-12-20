import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Neon from '../assets/neonCoffee.jpg'

const Login = () => {
    
  const [currEmployee, setCurrEmployee] = useState({ 
    email: "",
    password: "",

  });
  const navigate = useNavigate();

  const onchangeHandler = (e) => {
    setCurrEmployee({...currEmployee, [e.target.name]: e.target.value})
  }

  const loginHandleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/login', currEmployee)
            .then(res=>{
                console.log(res.data);
                navigate('/dashboard');
                
            })
            .catch((err) => {
              console.log(err)
                
        });
  }

  return (
    <div className='flex justify-center align-middle p-[20rem]'>
      <img className='login-pic' src={Neon} alt="" />
      <div className="card">
          <div className="card-header">
            <div className="text-header">Login</div>
          </div>
          <div onSubmit={loginHandleSubmit} className="card-body">
            <form action="">
            <div className="form-group">
                <label for="email">Email:</label>
                <input required="" className="form-control" onChange={onchangeHandler} value={currEmployee.email} name="email" id="email" type="email"/>
              </div>
              <div className="form-group">
                <label for="password">Password:</label>
                <input required="" className="form-control" onChange={onchangeHandler} value={currEmployee.password} name="password" id="password" type="password"/>
              </div>

                  <input type="submit" className="btn" value="submit"/>   
            </form>
            
        </div>
          <div className="card-footer">
            <Link className='p-8 ' to="/register">Need to Register? Click here</Link>
          </div>
      </div>
    </div>
  )
}

export default Login
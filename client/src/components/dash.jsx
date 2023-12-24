import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'






const Dash = (props) => {
    const navigate = useNavigate();
    const {removeFromDom ,employee, setEmployee } = props;
    const [newEmployee, setNewEmployee] = useState({ 
      name: "",
      email: "",
    });
  
    const changeHandler = (e) => {
      setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }
  
  
    const registerHandleSubmit = () => {
      
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
      


    const deleteEmployee = (employeeId) => {
        axios.delete('http://localhost:8000/api/delete/' + employeeId)
            .then(res => {
                removeFromDom(employeeId)
                navigate("");
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/employee/all", employee)
    	.then((res)=>{
	    console.log(res.data);
            setEmployee(res.data);

	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        
  <div className='h-[100%]'>
    
      <div className="flex h-[50%]">
        <div className="flex flex-col justify-start w-80 m-4 p-5 border border-black rounded-md bg-slate-400 bg-opacity-70 shadow-xl shadow-black">
          
        <Link to={"/"}>
            <button type="button" className='m-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2  ' >home</button>
          </Link>
          <Link to={""}>
            <button className='m-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2 ' >Forms</button>
          </Link>
          <div className="mt-4">
            <div className="m-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2 ">
              Add Employee
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
              <div className="form-group flex justify-center">
                <input type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 " value="submit"/>   
            </div> 
            </form>
        </div>
      </div>
          {/* <button onClick={logout} className='m-4 p-1 rounded-2xl text-white bg-gray-800 w-40 text-2xl shadow-xl shadow-gray-700 hover:scale-110 ' >Logout</button> */}
        </div>

        <div className="grid grid-cols-3 gap-1 w-2/3 m-4 pr-8 bg-slate-400 bg-opacity-75 shadow-xl shadow-black rounded-xl">
        {employee.map((employee, index)=>{
                return (
                    
                <div key={index}>
                    
                    <div className="border border-black bg-neutral-100 rounded-lg shadow-lg shadow-black container text-center m-3" >
                        <div className="row">
                            <div className="border border-black col">
                              
                                <h1 className="text-2xl p-4">Name: {employee.name}</h1>
                            </div>
                            <div className="border border-black col ">
                              <h3 className="p-4 text-3xl">Notes: {employee.note}</h3>
                            </div>
                            <div className="border border-black col">
                              <h3 className="p-4 text-3xl">Avail: {employee.avail}</h3>
                            </div>
                            <div className="border border-black flex flex-col col p-4">
                                <Link to={"/employee/" + employee._id}>
                                  <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " >Edit</button>
                                </Link>
                                <Link to={"/api/delete/" + employee._id}>
                                  <button onClick={(e)=>{deleteEmployee(employee._id)}} type="button" className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' >Delete</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                )})
              }
            </div>
      </div>
  </div>
  )
}

export default Dash
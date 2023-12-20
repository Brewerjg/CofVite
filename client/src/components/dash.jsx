import { useEffect } from "react"
import React from 'react'
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'
import Brick from "../assets/brickWall.jpg"





const Dash = (props) => {
    const navigate = useNavigate();
    const {removeFromDom ,employee, setEmployee } = props;
       

      
      

    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {})
            .then(res=>{
                navigate('/login');
            })
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
        
  <div className=' h-[100%]'>
    <img className="image-bg" src={Brick} alt={Brick} />
      <div className="flex">
        <div className="flex flex-col justify-around w-80 m-4 p-5 border border-black rounded-md bg-slate-400 bg-opacity-70 shadow-xl shadow-black">
          
        <Link to={"/"}>
            <button className='m-4 p-1 rounded-2xl text-white bg-gray-800 w-40 text-2xl shadow-xl shadow-gray-700 hover:scale-110 ' >home</button>
          </Link>
          <Link to={""}>
            <button className='m-4 p-1 rounded-2xl text-white bg-gray-800 w-40 text-2xl shadow-xl shadow-gray-700 hover:scale-110 ' >Forms</button>
          </Link>
          <Link to={""}>
            <button className='m-4 p-1 rounded-2xl text-white bg-gray-800 w-40 text-2xl shadow-xl shadow-gray-700 hover:scale-110 ' >Something</button>
          </Link>
          <Link to={"/register"}>
            <button className='m-4 p-1 rounded-2xl text-white bg-gray-800 w-40 text-2xl shadow-xl shadow-gray-700 hover:scale-110 ' >Add Employee</button>
          </Link>
          <button onClick={logout} className='m-4 p-1 rounded-2xl text-white bg-gray-800 w-40 text-2xl shadow-xl shadow-gray-700 hover:scale-110 ' >Logout</button>
        </div>

        <div className="w-2/3 m-4 pr-8 bg-slate-400 bg-opacity-75 shadow-xl shadow-black rounded-xl">
        {employee.map((employee, index)=>{
                return (
                    
                <div key={index}>
                    
                    <div className="border border-black bg-neutral-100 rounded-lg shadow-lg shadow-black container text-center m-3" >
                        <div className="row">
                            <div className="border border-black col">
                              
                                <h1 className="text-2xl p-4">{employee.name}</h1>
                            </div>
                            <div className="border border-black col ">
                              <h3 className="p-4 text-3xl">{employee.note}</h3>
                            </div>
                            <div className="border border-black col">
                              <h3 className="p-4 text-3xl">{employee.avail}</h3>
                            </div>
                            <div className="border border-black flex flex-col col p-4">
                                <Link to={"/employee/" + employee._id}>
                                  <button className='m-4 btn shadow-lg shadow-black' >Edit</button>
                                </Link>
                                <Link to={"/api/delete/" + employee._id}>
                                  <button onClick={(e)=>{deleteEmployee(employee._id)}} className='btn shadow-lg shadow-black' >Delete</button>
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
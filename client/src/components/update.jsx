import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";




const Update = () => {
    const { id } = useParams(); 
    const [name, setName] = useState();
    const [avail , setAvail] = useState();
    const [email, setEmail] = useState();
    const [note, setNote] = useState();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);


    const deleteEmployee = (employeeId) => {
        axios.delete('http://localhost:8000/api/delete/' + employeeId)
            .then(res => {

                navigate("/dashboard");
            })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/oneemployee/' + id)
            .then(res => {
                setName(res.data.name);
                setEmail(res.data.email);
                setAvail(res.data.avail);
                setNote(res.data.note);

            })
            .catch(err => console.log(err))
    }, [])
    
    const updateEmployee = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/employee/' + id, {
            name,
            email,
            avail,
            note,
    })   

            .then(res => {
                console.log(res);
                navigate("/dashboard"); 
            })

            .catch((err) => {
                const errorResponse = err.response.data.errors;
                console.log(err.response);
                const errorArr = Object.values(errorResponse).map((error) => error.message);
                setErrors(errorArr);
        });            
}


    return (
        <div className='p-10'>
            <div>
                <div className='flex justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                    <h1 className='text-5xl'>Edit Employee</h1>
                </div>
                <div className='flex justify-start m-4'>
                    <Link to={"/dashboard"}>
                        <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 ' >Dashboard</button>
                    </Link>
                </div>
                <div className='bg-slate-400 w-1/3 rounded-2xl opacity-90 p-4'>
                {errors.map((err, index) => (
                    <p key={index}>{err}</p>
                ))}
                <form onSubmit={updateEmployee}>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input required="" className="form-control border border-black" value={name}  onChange={(e)=>setName(e.target.value)} name="name" id="name" type="name"/>
                    </div>
                    <div className="form-group w-1/3">
                        <label for="email">Email:</label>
                        <input required="" className="form-control border border-black" value={email}  onChange={(e)=>setEmail(e.target.value)} name="email" id="email" type="email"/>
                    </div>
                    <div className='form-group'>
                        <label for="avail">Availability:</label>
                        <textarea className="form-control border border-black" id="exampleFormControlTextarea1" rows="3" value={avail}  onChange={(e)=>setAvail(e.target.value)}></textarea>
                    </div>
                    <div className='w-full form-group'>
                        <label for="formGroupExampleInput2" className="form-label">Note</label>
                        <textarea className="form-control border border-dark" id="exampleFormControlTextarea1" rows="3" value={note}  onChange={(e)=>setNote(e.target.value)}></textarea>
                    </div>
                    <input className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 ' type="submit" />
                </form>
                <div class="col">
                    <button onClick={(e)=>{deleteEmployee(id)}} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' >Delete</button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Update;
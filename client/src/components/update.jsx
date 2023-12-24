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
        <div className='m-5'>
            <div>

                <div className='flex justify-center bg-slate-400 rounded-2xl p-4 opacity-90'>
                    <h1 className='text-5xl'>Edit Employee</h1>
                </div>
                <div className='flex justify-end m-4'>
                    <Link to={"/dashboard"}>
                        <button className='ms-5 btn shadow-lg shadow-black' >Dashboard</button>
                    </Link>
                </div>
                <div className='bg-slate-400 rounded-2xl opacity-90 p-4'>
                {errors.map((err, index) => (
                    <p key={index}>{err}</p>
                ))}
                <form onSubmit={updateEmployee}>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input required="" className="form-control border border-black" value={name}  onChange={(e)=>setName(e.target.value)} name="name" id="name" type="name"/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input required="" className="form-control border border-black" value={email}  onChange={(e)=>setEmail(e.target.value)} name="email" id="email" type="email"/>
                    </div>
                    <div className='form-group'>
                        <label for="avail">Availability:</label>
                        <textarea className="form-control border border-black" id="exampleFormControlTextarea1" rows="3" value={avail}  onChange={(e)=>setAvail(e.target.value)}></textarea>
                    </div>
                    <div className='form-group'>
                        <label for="formGroupExampleInput2" class="form-label">Note</label>
                        <textarea class="form-control border border-dark" id="exampleFormControlTextarea1" rows="3" value={note}  onChange={(e)=>setNote(e.target.value)}></textarea>
                    </div>
                    <input className='m-2 btn shadow-lg shadow-black ' type="submit" />
                </form>
                <div class="col">
                    <button onClick={(e)=>{deleteEmployee(id)}} className='ms-2 btn shadow-lg shadow-black ' >Delete</button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Update;
import React from 'react'
import { useState } from 'react';
import Update from '../components/update';






function UpdateView() {
    const [employee, setEmployee] = useState([]);
    const removeFromDom = employeeId => {
        setEmployee(employee.filter(employee => employee._id !== employeeId));
    }
  return (
    <div className='bg-[#2d2b3b] h-screen'>
        <Update employee={employee} setEmployee={setEmployee} removeFromDom={removeFromDom}/>
    </div>
  )
}



export default UpdateView
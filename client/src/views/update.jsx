import React from 'react'
import { useState } from 'react';
import Update from '../components/update';






function Dash() {
    const [employee, setEmployee] = useState([]);
    const removeFromDom = employeeId => {
        setEmployee(employee.filter(employee => employee._id !== employeeId));
    }
  return (
    <div>
        <Update employee={employee} setEmployee={setEmployee} removeFromDom={removeFromDom}/>
    </div>
  )
}



export default Dash
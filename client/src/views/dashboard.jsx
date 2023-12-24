import React from 'react'
import Dash from '../components/dash';
import { useState } from 'react';
import Product from '../components/productUpload';
import Displaypro from '../components/displaypro';
import Cal from '../components/calendar';





function Dashboard() {
    const [employee, setEmployee] = useState([]);
    const removeFromDom = employeeId => {
        setEmployee(employee.filter(employee => employee._id !== employeeId));
    }
    const [product, setProduct] = useState([]);
    const removeDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }
  return (
    <div>
        <Dash 
        employee={employee} setEmployee={setEmployee} removeFromDom={removeFromDom}/>
        <Product/>
        <Displaypro product={product} setProduct={setProduct} removeDom={removeDom}/>
        <Cal/>

    </div>
  )
}



export default Dashboard
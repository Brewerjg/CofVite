import React from 'react'
import DashBoard from '../components/dash';
import { useState } from 'react';
import Product from '../components/product';
import Displaypro from '../components/displaypro';
import Cal from '../components/calendar';





function Dash() {
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
        <DashBoard 
        employee={employee} setEmployee={setEmployee} removeFromDom={removeFromDom}/>
        <Product/>
        <Displaypro product={product} setProduct={setProduct} removeDom={removeDom}/>
        <Cal/>

    </div>
  )
}



export default Dash
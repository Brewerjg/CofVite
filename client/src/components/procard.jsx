import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Procard = () => {
    const [product, setProduct] = useState([]);

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product/all")
    	.then((res)=>{
	    console.log(res.data);
            setProduct(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
  return (
    <div name='product' className=" my-8 grid 2xl:grid-cols-5 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 p-6">
        
        {product.map((product, index)=>{
                return (
        <div className='bg-transparent rounded-3xl' key={index}>
            <img src={product.image} alt=" random imgee" className="w-full object-cover object-center rounded-3xl bg-slate-600 shadow-md"/>  
            
            <div className="relative px-4 -mt-16  ">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate ">{product.title}</h4>
                    <div className="mt-1 text-lg">
                    {product.productBody}
                    </div>
                </div>
            </div>
        </div>
        )})
        }
    </div>
  )
}

export default Procard
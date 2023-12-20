import React from 'react'
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'
import { useEffect } from "react"


const Displaypro = (props) => {
    const navigate = useNavigate();
    const {removeDom ,product, setProduct } = props;
       

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/delete/' + productId)
            .then(res => {
                removeDom(productId)
                navigate("");
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product/all", product)
    	.then((res)=>{
	    console.log(res.data);
            setProduct(res.data);

	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
  return (
    <div className='flex justify-center container w-full mt-4 '>
        <div className="w-full m-4 pr-8 bg-slate-400 bg-opacity-75 shadow-xl shadow-black rounded-xl">
        <h1 className='text-5xl text-red-900 m-4'>Here are Your Products!</h1>
        {product.map((product, index)=>{
                return (
        <div key={index}>
        <div className="border border-black bg-neutral-100 rounded-lg shadow-lg shadow-black container text-center m-3" >
            <div className="row">
                <div className="border border-black col">
                    <img className="p-2" src={product.image} alt="" />
                </div>
                <div className="border border-black col ">
                    <h3 className="p-4 text-5xl">{product.title}</h3>
                </div>
                <div className="border border-black col">
                    <h3 className="p-4 text-3xl">{product.productBody}</h3>
                </div>
                <div className="border border-black flex flex-col col p-4">
                    <Link to={"/product/" + product._id}>
                        <button className='m-4 btn shadow-lg shadow-black' >Edit</button>
                    </Link>
                    <Link to={"/api/delete/" + product._id}>
                        <button onClick={(e)=>{deleteProduct(product._id)}} className='btn shadow-lg shadow-black' >Delete</button>
                    </Link>
                </div>
            </div>
        </div>
        
    </div>
    )})
    }
</div>
    </div>
  )
}

export default Displaypro
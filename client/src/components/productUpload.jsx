import React, {useState ,useEffect} from 'react'
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import { useNavigate } from 'react-router-dom';



export default function Product () {
    const [product , setProduct] = useState({
        image: "",
        title: "",
        productBody: "",
    });

    const navigate = useNavigate();

    const url = "http://localhost:8000/api/product/new";
    const createImage = (newImage) => axios.post(url, newImage);
    
      const createPro = async (product) => {
        try {
          await createImage(product);
          navigate('/dashboard');
        } catch (error) {
          console.log(error.message);
        }
      };

      const handleSubmit = () => {
        
        createPro(product);
        navigate('/dashboard');
      };
  
    return (
      <div className='rounded-xl mt-10 mx-10 p-5 bg-slate-400 bg-opacity-75 shadow-black shadow-xl' >
        <div className='container flex justify-center'>
          <h1 className='text-5xl text-red-900'>Add Product</h1>
        </div>
        <form onSubmit={handleSubmit}>
        
          <div className="form-group m-2" >
            <label for="title">Title:</label>
            <input required="" className="form-control" onChange={e => setProduct({ ...product, title: e.target.value })} value={product.title} name="title" id="title" type="text"/>
          </div>
          <div className="form-group m-2">
            <label for="productBody">Description:</label>
            <input required="" className="form-control" onChange={e => setProduct({ ...product, productBody: e.target.value })} value={product.productBody} name="productBody" id="productBody" type="text"/>
          </div>
          <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setProduct({ ...product, image: base64 })}
          />
          <button className='m-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2 '>Submit</button>
        </form>
      </div>
  )
}


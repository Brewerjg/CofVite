import React from 'react'
import {BsPinMap} from 'react-icons/bs'
import TupeloOlive from '../assets/TupeloOlive.png'
import { FaFacebook, FaInstagram} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className=" footer flex justify-between items-center p-10 bg-[#b1b9a6] ">
        <div className='container mx-auto grid grid-cols-3 place-items-center  gap-4'>
            <div className='bg-[#b1b9a6] rounded-lg p-2' >
                <p className='mt-5 font-["Permanent_Marker"]  text-bold text-2xl underline decoration-[#00a6be]'>Tupelo Coffee</p>
                <p>Best coffee products</p>
                <p>in the south.</p>
            </div> 

            <div>
                <a href="/" >
                <img className='rounded-full scale-150 ' src={TupeloOlive} alt="intial" style={{width: '90px'}} />
                </a>
            </div>

            <div className="bg-[#b1b9a6] rounded-lg p-2 grid gap-4">
                <a href="https://www.facebook.com/OnyxCoffeeLab/" className='hover:scale-110'><FaFacebook size={25}/></a> 
                <a href="https://www.instagram.com/onyxcoffeelab/" className='hover:scale-110'><FaInstagram size={25}/></a> 
                <a href="/location" className='hover:scale-110'><BsPinMap size={25}/></a>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer
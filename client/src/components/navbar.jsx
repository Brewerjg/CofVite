import React, {useState} from 'react'
import {FaBars, FaTimes, FaFacebook, FaInstagram, } from 'react-icons/fa'
import {BsPinMap} from 'react-icons/bs'
import TupeloCreme from '../assets/Tupelocreme.png'


const  Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='z-10 fixed w-full h-[95px] flex justify-between items-center px-4 bg-transparent '>

        {/* Logo */}
        <div className='pl-4'>
            <a href="/">
            <img className='rounded-full mt-10 scale-150' src={TupeloCreme} alt="intial" style={{width: '75px'}} />
            </a>
        </div>
        <div className='md:hidden font-["Permanent_Marker"]  text-[#fffdd0] text-2xl font-bold'>
            Tupelo Coffee
        </div>
            <ul className='mt-8 hidden md:flex '>
                <li className='font-["Permanent_Marker"] text-2xl bg-[#fffdd0] rounded-full mr-3 hover:rounded-full hover:border-2 hover:border-[#00a6be]'>
                    <a href="/">Home</a>
                </li>
                <li className='font-["Permanent_Marker"] text-2xl mr-3  bg-[#fffdd0] rounded-full hover:rounded-full hover:border-2 hover:border-[#00a6be]'>
                    <a href="/about">About</a>
                </li>
                <li className='font-["Permanent_Marker"] text-2xl mr-3  bg-[#fffdd0] rounded-full hover:rounded-full hover:border-2 hover:border-[#00a6be]'>
                    <a href="/menu">Menu</a>
                </li>
                <li className='font-["Permanent_Marker"] text-2xl mr-3  bg-[#fffdd0] rounded-full hover:rounded-full hover:border-2 hover:border-[#00a6be]'>
                    <a href="/location">Find Us</a>
                </li>
                <li className='font-["Permanent_Marker"] text-2xl mr-3  bg-[#fffdd0] rounded-full hover:rounded-full hover:border-2 hover:border-[#00a6be]'>
                    <a href="/dashboard">Dashboard</a>
                </li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars size={32} color='#fffdd0'/> : <FaTimes size={32} color='#fffdd0'/>}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen text-black  flex flex-col justify-center items-center'}>
            <li className='py-5 text-4xl shadow-2xl shadow-black mt-3 font-["Permanent_Marker"] mr-1  bg-[#fffdd0] rounded-full hover:rounded-full hover:border-2 hover:border-[#00a6be]'>
                <a href="/">Home</a>
            </li>
            <li className='py-5 text-4xl shadow-2xl shadow-black mt-3 font-["Permanent_Marker"] mr-1  bg-[#fffdd0] rounded-full hover:rounded-full hover:border-2 hover:border-[#00a6be]'>
                <a href="/about">About</a>
            </li>
            <li className='py-5 text-4xl shadow-2xl shadow-black mt-3 font-["Permanent_Marker"] mr-1  bg-[#fffdd0] rounded-full hover:rounded-full hover:border-2 hover:border-[#00a6be]'>
                <a href="/menu">Menu</a>
            </li>
            <li className='py-5 mt-3 text-4xl shadow-2xl shadow-black font-["Permanent_Marker"] mr-1  bg-[#fffdd0] rounded-full hover:rounded-full hover:border-2 hover:border-[#00a6be]'> 
                <a href="/location">Find Us</a>
            </li>
            <li className='py-5 mt-3 text-4xl shadow-2xl shadow-black font-["Permanent_Marker"] mr-1  bg-[#fffdd0] rounded-full hover:rounded-full hover:border-2 hover:border-[#00a6be]'> 
                <a href="/dashboard">Dashboard</a>
            </li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3b5998]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.facebook.com/OnyxCoffeeLab/">Facebook <FaFacebook size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.instagram.com/onyxcoffeelab/">Instagram <FaInstagram size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/location">Location <BsPinMap size={30}/></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import MenuOne from '../assets/menuOne.jpg';
import MenuTwo from '../assets/menuTwo.jpg';


const Menu = () => {
  return (
    <div className=' bg-[#b1b9a6]'>
        <img className=' scale-75' src={MenuOne} alt="" />
        <img className='scale-75 ' src={MenuTwo} alt="" />
    </div>
  )
}

export default Menu
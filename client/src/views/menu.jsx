import React from 'react'
import MenuPage from '../components/Menu';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';



function Menu() {
  return (
    <div>
      <Navbar/>
      <MenuPage/>
      <Footer/>
    </div>
  )
}

export default Menu
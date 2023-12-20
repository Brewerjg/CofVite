import React from 'react'
import MenuPage from '../components/Menu';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';



function MenuView() {
  return (
    <div>
      <Navbar/>
      <MenuPage/>
      <Footer/>
    </div>
  )
}

export default MenuView
import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/navbar';

import About from '../components/about';


function about() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  )
}

export default about

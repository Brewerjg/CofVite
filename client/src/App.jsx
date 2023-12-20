import React from 'react';
import Home from './views/home';
import MenuView from './views/menuView'; 
import TruckMap from './views/coffeeTruck';
import About from './views/About';
import Login from './views/Login';
import Dash from './views/Dash';
import Register from './views/Register';
import Update from './views/Update';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/" />  
            <Route element={<MenuView/>} path="/menu" />
            <Route element={<TruckMap/>} path="/location" />
            <Route element={<About/>} path="/about" />
            <Route element={<Login/>} path="/login" />
            <Route element={<Dash/>} path="/dashboard" />
            <Route element={<Register/>} path="/register" />
            <Route element={<Update/>} path="/employee/:id"/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

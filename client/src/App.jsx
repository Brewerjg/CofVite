import React from 'react';
import Home from './views/home';
import MenuView from './views/menuView'; 
import TruckMap from './views/coffeeTruck';
import AboutView from './views/aboutView';
import LoginView from './views/loginView';
import Dashboard from './views/dashboard';
import RegisterView from './views/registerView';
import UpdateView from './views/updateView';
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
            <Route element={<AboutView/>} path="/about" />
            <Route element={<LoginView/>} path="/login" />
            <Route element={<Dashboard/>} path="/dashboard" />
            <Route element={<RegisterView/>} path="/register" />
            <Route element={<UpdateView/>} path="/employee/:id"/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home';
import Dashboard from './views/dashboard';
import UpdateView from './views/updateView';



function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<UpdateView />} path="/employee/:id" />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

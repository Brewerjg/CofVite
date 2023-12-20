import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./views/home'));
const MenuView = React.lazy(() => import('./views/menuView'));
const TruckMap = React.lazy(() => import('./views/coffeeTruck'));
const AboutView = React.lazy(() => import('./views/aboutView'));
const LoginView = React.lazy(() => import('./views/loginView'));
const Dashboard = React.lazy(() => import('./views/dashboard'));
const RegisterView = React.lazy(() => import('./views/registerView'));
const UpdateView = React.lazy(() => import('./views/updateView'));


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<MenuView />} path="/menu" />
              <Route element={<TruckMap />} path="/location" />
              <Route element={<AboutView />} path="/about" />
              <Route element={<LoginView />} path="/login" />
              <Route element={<Dashboard />} path="/dashboard" />
              <Route element={<RegisterView />} path="/register" />
              <Route element={<UpdateView />} path="/employee/:id" />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

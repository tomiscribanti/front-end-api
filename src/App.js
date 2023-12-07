import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import RegistroPage from './pages/RegistroPage';
import LibroPage from './pages/LibroPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';

const App = () => {
  return (

    <div className="container">
    <Routes>
      <Route path="/RegistroPage" element={<RegistroPage/>}>
      <Route path="/LibroPage" element={<LibroPage/>}/>
      <Route path="/LoginPage" element={<LoginPage/>}/>
      <Route path="/Inicio" element={<Home/>}/>
      </Route>
    </Routes>
    <footer className="bg-dark text-light text-center mt-5 p-3 d-flex align-items-center justify-content-center">
      <p className="m-0">&copy; 2023 Libros tomweb - Aplicaciones hibridas</p>
    </footer>
    </div>
  );
};

export default App;

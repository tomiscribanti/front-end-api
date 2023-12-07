import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LibroPage from './pages/LibroPage';
import Home from './pages/Home';
import RegistroPage from './pages/RegistroPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/Libros',
    element: <LibroPage/>
  },
  {
    path: '/Registro',
    element: <RegistroPage/>
  },
  {
    path: '/Login',
    element: <LoginPage/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={ router }>
   <App />
   </RouterProvider>
  </React.StrictMode>
);


reportWebVitals();

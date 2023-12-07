import React from 'react';
import LibroList from '../components/LibroList';
import Nav from '../components/Nav';

const Home = () => {

  return (
    <div>
    <div className='container'>    <Nav></Nav>
</div>
    <div className="hero"></div>
    <h2 className='text-center mb-5 mt-5'>Bienvenido a la biblioteca virtual </h2>
<div>
  <LibroList/>
</div>
    </div>
  );
};

export default Home;

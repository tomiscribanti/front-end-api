import React from 'react';
import RegistroForm from '../components/RegistroForm';
import Nav from '../components/Nav';

const RegistroPage = () => {
  return (
    <div>
        <div className='container'>    <Nav></Nav></div>
      <RegistroForm />
    </div>
  );
};

export default RegistroPage;

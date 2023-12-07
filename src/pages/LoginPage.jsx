import React from 'react';
import LoginForm from '../components/LoginForm';
import Nav from '../components/Nav';

const loginPage = () => {
  return (
    <div>
        <div className='container'>    <Nav></Nav></div>

      <LoginForm />
    </div>
  );
};

export default loginPage;

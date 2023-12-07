import React from 'react';
import LibroList from '../components/LibroList';
import Nav from '../components/Nav';

const LibroPage = () => {
  return (
    <div>
        <div className='container'>    <Nav></Nav></div>
      <LibroList />

    </div>
  );
};

export default LibroPage;

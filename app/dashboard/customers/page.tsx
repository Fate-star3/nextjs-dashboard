'use client';
import React, { useEffect } from 'react';

const Customers = () => {
  useEffect(() => {
    window.addEventListener('unload', () => {
      console.log('Unload');
      localStorage.setItem('unsavedData', JSON.stringify({ key: 'value' }));
      document.cookie = 'unload=true';
    });
    window.addEventListener('beforeunload', function (event) {
      console.log('Before Unload');
      document.cookie = 'beforeUnload=true';
    });
  }, []);
  return <p>Customers Page</p>;
};

export default Customers;

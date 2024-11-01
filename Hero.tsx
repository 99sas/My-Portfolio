import React, { useEffect } from 'react';
import Navbar from './Navbar'; // Ensure this path is correct

import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
  
  }, []);

  return (
    <div
      id='hero'
      className='min-h-screen bg-no-repeat bg-[url("/banner-bg.png")] bg-left lg:bg-[15%] bg-cover'
      style={{ backgroundSize: '40%' }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div id='name-container'>
            <p data-aos='zoom-in-up'>I'm</p>
            <p data-aos='zoom-in-up'>Saira</p>
            <p data-aos='zoom-in-up'>Nadeem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';

import Button from '../../components/button/Button';

import './Home.css';
import background from '../../assets/home-background.png';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-text-container'>
        <span className='page-title'>
          <span>TUTOR</span>
          <br></br>
          <span>SUPPORT</span>
          <br></br>
          <span>SYSTEM</span>
        </span>

        <span className='page-description'>
          Participate in an optimized digital peer tutoring and academic support program
        </span>

        <div className='home-button-container'> 
          <Button type='default'>Register</Button>
          <Button type='ghost'>Learn more</Button>
        </div>
      </div>

      <img src={background} alt="Home Background" />

    </div>
  )
}

export default Home
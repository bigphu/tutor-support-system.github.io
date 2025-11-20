import React from 'react'

import './Background.css'

import background from '../../assets/background.jpg'

const Background = () => {
  return (
    <div className='background-container'>
      <img  
        src={background}
        alt='Background'
        className='background-image large-12 medium-12 small-12'
      />

      <div className='background-overlay large-12 medium-12 small-12'></div>
    </div>
  )
}

export default Background

import React from 'react'

import './Background.css'

import background from '../../assets/background.jpg'

const Background = () => {
  return (
    <div>
      <img  
        src={background}
        alt='Background'
        className='background-image'
      />

      <div className='background-overlay'></div>
    </div>
  )
}

export default Background

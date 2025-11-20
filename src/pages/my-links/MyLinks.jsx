import React from 'react'

import './MyLinks.css'

import Window from '../../components/window/Window.jsx'

const MyLinks = () => {
  return (
    <div className='my-links-containter'>
      <div className='left-filler large-2 medium-1 small-0'></div>
      <div className='main-content large-8 medium-10 small-12'>
        <div className='top-filler'></div>

        <Window title='Links center'></Window>
        
        <div className='bottom-filler'></div>
      </div>
      <div className='right-filler large-2 medium-1 small-0'></div>
    </div>
  )
}

export default MyLinks
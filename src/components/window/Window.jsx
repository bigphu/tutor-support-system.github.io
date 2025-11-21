import React from 'react'

import './Window.css';

const Window = ({title, children, ...props}) => {
  return (
    <div className='window row' {...props}>
        <div className='window-title text-big text-primary text-bold'>
          {title}
        </div> 

        <div>
          {children}
        </div> 
        
    </div>
  )
}



export default Window

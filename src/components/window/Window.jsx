import React from 'react'

import './Window.css';

const Window = ({title, children, ...props}) => {
  return (
    <div className='window row' {...props}>
        <div className='window-title text-big text-primary'>
          <p>{title}</p>
        </div> 

        <div>
          <p>lskjmfae;ljfpoqwfpowe0ipof</p>
        </div> 
        
    </div>
  )
}



export default Window

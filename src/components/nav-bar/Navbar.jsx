import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

import logo from '../../assets/logo.png'
import notificationIcon from '../../assets/notification-icon.svg'
import profileIcon from '../../assets/profile-icon.svg'

const Navbar = () => {
  return (
    <nav className='navbar-container'> 
      {/* LEFT SIDE */}
      <div className='navbar-left'>
        <NavLink to='/' className='navbar-icon-home'>
          <img src={logo} 
          alt='Logo' 
          className='navbar-logo' />
        </NavLink>

        <div className='navbar-links'>
          <NavLink to='/' className='text-small text-light text-bold'>Home</NavLink>
          <NavLink to='/dashboard' className='text-small text-light text-bold'>Dashboard</NavLink>
          <NavLink to='/mylinks' className='text-small text-light text-bold'>My Links</NavLink>
          <NavLink to='/discovery' className='text-small text-light text-bold'>Discovery</NavLink>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='navbar-right'>
        <img
          src={notificationIcon}
          alt='Notifications'
          className='navbar-notification-icon'
        />
        
        <NavLink to='/profile'>
          <img
            src={profileIcon}
            alt='User Profile'
            className='navbar-profile-icon'
          />
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

import logo from '../../assets/logo.png'
import notificationIcon from '../../assets/notification-icon.svg'
import profileIcon from '../../assets/profile-icon.svg'

const Navbar = () => {
  return (
    <nav className='navbar-wrapper'> 
      {/* LEFT SIDE */}
      <div className='navbar-left'>
        <NavLink to='/' className='navbar-icon-home'>
          <img src={logo} 
          alt='Logo' 
          className='navbar-logo' />
        </NavLink>

        <div className='navbar-links'>
          <NavLink to='/' className='navbar-link-home'>Home</NavLink>
          <NavLink to='/dashboard' className='navbar-link-dashboard'>Dashboard</NavLink>
          <NavLink to='/mylinks' className='navbar-link-mylinks'>My Links</NavLink>
          <NavLink to='/discovery' className='navbar-link-discovery'>Discovery</NavLink>
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

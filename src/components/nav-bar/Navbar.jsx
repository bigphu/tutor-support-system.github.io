import React from 'react'
import './Navbar.css'

import logo from '../../assets/logo.png'
import notificationIcon from '../../assets/notification-icon.svg'
import profileIcon from '../../assets/profile-icon.svg'

const Navbar = () => {
  return (
    <nav className="navbar-wrapper"> 
      {/* LEFT SIDE */}
      <div className="navbar-left">
        <a href="/">
          <img src={logo} 
          alt="Logo" 
          className="navbar-logo" />
        </a>

        <div className="navbar-links">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/dashboard">Dashboard</CustomLink>
          <CustomLink href="/mylinks">My Links</CustomLink>
          <CustomLink href="/discovery">Discovery</CustomLink>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-right">
        <img
          src={notificationIcon}
          alt="Notifications"
          className="navbar-notification-icon"
        />
        
        <a href="/profile">
          <img
            src={profileIcon}
            alt="User Profile"
            className="navbar-profile-icon"
          />
        </a>
      </div>
    </nav>
  )
}

function CustomLink({href, children, ...props}) {
  const PATH = window.location.pathname;

  if (PATH === href) {
    return <a href={href} className="active" {...props}>{children}</a>
  } else {
    return <a href={href} {...props}>{children}</a>
  }
}

export default Navbar

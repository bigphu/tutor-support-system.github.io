import React from 'react'
import Navbar from './components/nav-bar/Navbar.jsx'

import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import MyLinks from './pages/MyLinks.jsx'
import Discovery from './pages/Discovery.jsx'
import Profile from './pages/Profile.jsx'

const App = () => {
  console.log(window.location.pathname)

  let PageToRender;
  switch (window.location.pathname) {
    case '/':
      PageToRender = <Home />;
      break
    case '/dashboard':
      PageToRender = <Dashboard />;      
      break
    case '/mylinks':
      PageToRender = <MyLinks />;      
      break
    case '/discovery':
      PageToRender = <Discovery />;      
      break
    case '/profile':
      PageToRender = <Profile />;
      break
    default:
      PageToRender = <div>404 Not Found</div>
  }
  
  return (
    <div type='module'>
      <Navbar />
      {PageToRender}
    </div>
  )
}

export default App

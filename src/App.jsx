import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/nav-bar/Navbar.jsx';

import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import MyLinks from './pages/MyLinks.jsx';
import Discovery from './pages/Discovery.jsx';
import Profile from './pages/Profile.jsx';

const App = () => {
  return (
    <div type='module'>
      <Navbar />

      <div className='spacer-navbar'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/mylinks' element={<MyLinks />} />
          <Route path='/discovery' element={<Discovery />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<div>404 Not Found</div>} />
        </Routes>   
      </div>
    </div>
  )
}

export default App;

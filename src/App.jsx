import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Navbar from './components/nav-bar/Navbar.jsx';
import Background from './components/background/Background.jsx';
import Footer from './components/footer/Footer.jsx';

import Home from './pages/home/Home.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import MyLinks from './pages/my-links/MyLinks.jsx';
import Discovery from './pages/discovery/Discovery.jsx';
import Profile from './pages/profile/Profile.jsx';

import './App.css';

const App = () => {
  return (
    <div className='App' type='module'>
      <div className='main row'>
        <Navbar />  

        {/* {useLocation().pathname !== '/' && <Background />} */}

        <div className='content-container grid'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/mylinks' element={<MyLinks />} />
            <Route path='/discovery' element={<Discovery />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<div>404 Not Found</div>} />
          </Routes>   
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App;

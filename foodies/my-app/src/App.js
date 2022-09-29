import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Navbar from './Navbar';
import Landing from './Landing';
import Footer from './Footer'

function App() {
  
  return < div className='App'>
    <Navbar></Navbar>
    <Routes>
     <Route exact path='/' element={<Landing></Landing>} />
      <Route exact path='/home' element={<Home />} />
      <Route  exact path='/contact' element={<Contact />} />
      <Route   exact path='/about' element={<About />} />
      <Route   exact path='/login' element={<Login />} />
    </Routes>
    <Footer></Footer>
  </div>
}

export default App;

import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import "./App.css";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className='main-contanier' id='home'><Home></Home></div>
      <div className='main-contanier' id='about'><About></About></div>
      <div className='main-contanier' id='portfolio'><Portfolio></Portfolio></div>
      <div className='main-contanier' id='contact'><Contact></Contact></div>
      <div className='footer'> Copyright © 2023 . Tarun.Portfolio | All Rights Reserved</div>
    </>
  );
}

export default App;




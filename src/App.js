import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import "./App.css";
import About from './component/About';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className='main-contanier' id='home'><Home></Home></div>
      <div className='main-contanier' id='about'><About></About></div>
      <div className='main-contanier' id='portfolio'>portfolio</div>
      <div className='main-contanier' id='contact'>contact</div>
    </>
  );
}

export default App;




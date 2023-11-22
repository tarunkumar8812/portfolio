import React, { useEffect, useState } from 'react';
import aboutPic from './assets/aboutPic.jpg'
import projectData from './projectData.js'
import resume from './assets/Resume.pdf'
import linking from './imgs/linking.png'
import fb from "./imgs/fb.png"
import linkedin from "./imgs/linkedin.png"
import instagram from "./imgs/instagram.png"
import twitter from "./imgs/twitter.png"
import github from "./imgs/github.png"
import phone from "./imgs/phone.png"
import gmail from "./imgs/gmail.png"
import './app.css'
import js from "./imgs/javascript.png"
import postman from "./imgs/postman.jpg"
import react from "./imgs/react.jpg"
import node from "./imgs/node.png"
import redis from "./imgs/redis.png"
import mongo from "./imgs/mongo.png"
import python from "./imgs/python.png"
import aws from "./imgs/aws.png"
import git from "./imgs/git.png"
import html from "./imgs/html.jpg"
import css from "./imgs/css.jpg"
import mui from "./imgs/MUI.png"
import express from "./imgs/express.png"
import mysql from "./imgs/mysql.png"
import { AppBar, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function App() {

  const frontedSkill = [js, react, html, css, mui]
  const backendSkill = [node, mongo, express, git, mysql, postman]



  const [activeTab, setActiveTab] = useState(1)
  const [menu, setMenu] = useState(false)
  const [rightBarPosi, setRightBarPosi] = useState(30)
  const [successMessage, setSuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)



  const [credentials, setCredentials] = useState({ name: "", email: "", message: "" })
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleClick = (n) => {
    setActiveTab(n)
  }
  const handleMenuOpen = () => {
    setMenu(true)
    setRightBarPosi(0)

  }
  const handleMenuClose = () => {
    setMenu(false)
    setRightBarPosi(100)
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbznff4h_zCqM-F7ayeC3X6Dt6Ykv7FLvq1tT8ZQon1aG_rtoLCDfY9v7XMUez0Cc-lZ/exec'
  const form = document.forms['submit-to-google-sheet']
  const onSubmit = (e) => {
    e.preventDefault()

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        setSuccessMessage(true)
        setTimeout(() => {
          setSuccessMessage(false)
          window.location.reload()
        }, 5000);
      })
      .catch(error => {
        setErrorMessage(true)
        setTimeout(() => {
          setErrorMessage(false)
          window.location.reload()
        }, 5000);
      })
  }




  return (
    <>
      <nav>
        <a href='#home'><h1 className='logo'>Tarun.</h1></a>
        <Box sx={{ display: { xs: 'none', md: "block" } }}>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </Box>
        <Box
          sx={{ display: { xs: 'block', md: "none" } }}
          className='hamburger-menu'>
          <IconButton sx={{ size: 'large' }}>
            {!menu && <MenuIcon sx={{ color: 'white', }} onClick={handleMenuOpen}></MenuIcon>}
            {menu && <CloseIcon sx={{ color: 'white', }} onClick={handleMenuClose}></CloseIcon>}
          </IconButton>
        </Box>

        <Box
          onClick={handleMenuClose}
          sx={{ position: 'absolute', transition: "0.2s", top: "0", right: `-${rightBarPosi}%`, height: "100vh", width: "30%", bgcolor: "#00000080", display: { xs: 'block', md: "none" } }}>
          <ul
            style={{ marginTop: "50px", display: "flex", flexDirection: "column" }}>
            <li  ><a href='#home'>Home</a></li>
            <li  ><a href='#about'>About</a></li>
            <li  ><a href='#portfolio'>Portfolio</a></li>
            <li  ><a href='#contact'>Contact</a></li>
          </ul>
        </Box>
      </nav>



      {/* ----------- portfolio ----------  */}

      <div id='home'>
        <div className='container'>
          <h2> Full-Stack Developer</h2>
          <h1> Hi, I'm Tarun kumar</h1>
          <button className='resume'><a href={resume} download >Download CV</a></button>
        </div>
      </div>

      {/* ----------- about ----------  */}

      <div id='about'>
        <div className='container'>
          <div className='row'>
            <div className='about-col-1'>
              <img src={aboutPic} alt='img' ></img>
            </div>
            <div className='about-col-2'>
              <h1 className='sub-title'>About Me</h1>
              <p>Hello, I am Tarun Kumar, having Gradution Degree from Delhi Univercity. I have experience in teaching and running a coaching center, and have taught over 300+ students in the last 2 years. I am currently a freelancer, and Trainee at functionUp Bootcamp for FullStack Web development using JavaScript, NodeJS, ReactJS, ExpressJS, MongoDB, MySQL, and also AWS S3, Redis, HTML & CSS. I have completed various projects such as Booking Website, book management system, Note Making App, e-commerce website, blogging site, URL shortener, and college internship portal using these technologies.</p>

              <br />
              <p>
                My goal is to work with a reputed company for a successful career in the tech field. I am confident that my skills and project experience make me a strong fit for this role. I am a self-motivated, hard-working, and disciplined individual with strong communication and problem-solving skills. My greatest strength is my creativity, I am confident that I can make a valuable contribution to your company and believe that my skills and project experience make me a strong fit for this role in backend development. Thank you for considering me for this opportunity. I look forward to your response.</p>


              <div className='tab-titles'>
                <p className={activeTab === 1 ? 'tab-links active-link' : 'tab-links'} onClick={() => handleClick(1)}>Skills</p>
                <p className={activeTab === 2 ? 'tab-links active-link' : 'tab-links'} onClick={() => handleClick(2)}>Experience</p>
                <p className={activeTab === 3 ? 'tab-links active-link' : 'tab-links'} onClick={() => handleClick(3)}>Education</p>
              </div>

              <div className={activeTab === 1 ? 'tab-contents active-tab' : 'tab-contents'}>
                <ul>
                  <li><span>Frontend Development</span> <br /> Designing Web/App interfaces</li>
                  <div className='skill-icons'>
                    {frontedSkill.map((skill, ind) => {
                      return (<>
                        <img key={ind} src={skill} alt='png'></img>
                      </>)
                    })}
                  </div>
                  <li><span>Backend Development</span> <br /> builing Web/App logic</li>
                  <div className='skill-icons'>
                    {backendSkill.map((skill, ind) => {
                      return (<>
                        <img key={ind} src={skill} alt='png'></img>
                      </>)
                    })}
                  </div>
                </ul>
              </div>

              <div className={activeTab === 2 ? 'tab-contents active-tab' : 'tab-contents'}>
                <ul>
                  <li><span>Jul, 2022 - present</span> <br />Web Development Training at FunctionUp</li>
                  <li><span>Apr, 2021 - May, 2022</span> <br /> Site engineer at N.V Constructions </li>
                  <li><span>Jan,2019 - Apr, 2021</span> <br /> Teacher at Xellent Coaching Center </li>
                </ul>
              </div>

              <div className={activeTab === 3 ? 'tab-contents active-tab' : 'tab-contents'}>
                <ul>
                  <li><span>2018</span> <br /> Bachelor of ARTs</li>
                  <li><span>2017</span> <br /> Diploma in Civil Engineering</li>
                  <li><span>2013</span> <br /> 12th from C.B.S.E</li>

                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* ----------- services ----------  */}

      {/* <div id='services'>
        <div className='container'>
          <h1 className='sub-title'>My Services</h1>
          <div className='services-list'></div>
        </div>
      </div> */}




      {/* ----------- portfolio ----------  */}

      <div id='portfolio'>
        <div className='container'>
          <h1 className='sub-title'>My Projects</h1>
          <div className='project-list'>
            {projectData.map((x, ind) => {
              return (<>
                <div className='card' id={ind}>
                  <div className='img-container'>
                    <img alt="imgg" src={x.img}></img>
                  </div>
                  <div className='card-info'>
                    <div className='card-details'>
                      <h2>{x.title}</h2>
                      <p>{x.desc}</p>
                      <p>{x.stack}</p>
                    </div>
                    <div className='card-links'>
                      <div className='btns'>
                        <a target='#' href={x.link}>Website <img alt="imgg" src={linking}></img></a>
                        <a target='#' href={x.gitHubLink}>Source Code <img alt="imgg" src={linking}></img></a>
                      </div>
                    </div>
                  </div>
                </div>
              </>)
            })}
          </div>
        </div>
      </div>




      {/* ----------- contact ----------  */}

      <div id='contact'>
        <div className='container'>
          <h1 className='sub-title'>Contact Me</h1>
          <div className='row'>
            <div className='contact-left'>
              <div className='social-icons'>
                <p><img className='icons' src={gmail}></img>tarunkumarkoli.tk@gmail.com</p>
                <p><img className='icons' src={phone}></img>+91 8586893180</p>
                <a href='https://www.facebook.com'> <img className='icons' src={fb}></img> facebook</a>
                <a href='https://www.twitter.com'> <img className='icons' src={twitter}></img>twitter</a>
                <a href='https://www.instagram.com'> <img className='icons' src={instagram}></img>instagram</a>
                <a href='https://www.linkedin.com'> <img className='icons' src={linkedin}></img>linkedin</a>
                <a href='https://www.linkedin.com'> <img className='icons' src={github}></img>GitHub</a>
              </div>
            </div>
            <div className='contact-right'>
              <form onSubmit={e => onSubmit(e)} name='submit-to-google-sheet' method='post'>
                <input onChange={onChange} type='text' className='input' name='Name' placeholder='Your Name' required ></input>
                <input onChange={onChange} type='email' className='input' name='Email' placeholder='Your Email' required ></input>
                <textarea onChange={onChange} rows='6' className='input' name='Message' placeholder='Your Message' required ></textarea>
                <button type='submit'>Send Message</button>
              </form>
              {successMessage && <p className='success'>Message sent successful</p>}
              {errorMessage && <p className='error' >Message didn't sent!!</p>}
            </div>
          </div>
        </div>
      </div>
      <AppBar position='static' sx={{ display: "flex", alignItems: "center" }}>

        <div style={{ padding: "5px", fontSize: "12px" }}> Copyright © 2023 . Tarun.Portfolio | All Rights Reserved</div>
      </AppBar>
    </>
  );
}

export default App;

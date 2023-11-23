import React from 'react'
import './home.css'
import resume from '../assets/Resume_TarunKumar.pdf'

const Home = () => {
    return (
        <div className='home-container'>
            <p>Full-Stack Web Developer</p>
            <h1>Hi, I'm </h1>
            <button className='btn'><a href={resume} download >Download CV</a></button>
            {/* <img src='' alt='home-img'></img> */}
        </div>
    )
}

export default Home
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"
import menu from "../imgs/menu.png"
import cross from "../imgs/x-button.png"
import resume from "../assets/Resume.pdf"
// import downloadIcon from "../imgs/downloadIcon.png"

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)

    function mouseHover() {
        window.document.getElementById("resume").innerHTML = "Download"
    }
    function leave() {
        window.document.getElementById("resume").innerHTML = "Resume"
    }



    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to='/'>
                <h1>Portfolio.</h1>
            </Link>
            <ul className={!click ? 'nav-menu' : "nav-menu"} onClick={handleClick} >
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/project">Project</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li ><a id='resume' onMouseLeave={leave} onMouseOver={mouseHover} href={resume} download="Resume_Tarun_Kumar">Resume
                    {/* <img className='resumePdf' src={downloadIcon} alt='download'></img> */}
                </a></li>
            </ul>
            <div className='hamburger' onClick={handleClick} >
                {click ? <img className='cross' src={cross} alt="cross"></img> : <img className='menu' src={menu} alt="menu"></img>}
            </div>
        </div>
    )
}

export default Navbar

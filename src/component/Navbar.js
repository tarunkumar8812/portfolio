import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
                <h1>Tarun Kumar..</h1>
            </Link>
            <ul className={!click ? 'nav-menu' : "nav-menu avtive"} onClick={handleClick} >
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
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
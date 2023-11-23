import React, { useState } from 'react'
import menu from "../imgs/menu.png"
import cross from "../imgs/x-button.png"
import "./navbar.css"

const Navbar = () => {

    const [color, setColor] = useState(false)
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)

    return (
        <div className={color ? "header header-bg" : "header"}>
            <a href='#home'><h1 className='logo'>T a r u n.</h1></a>
            <ul
                className={!click ? 'nav-menu' : "nav-menu avtive"}
                onClick={handleClick} >
              
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='hamburger' onClick={handleClick} >
                {click ? <img className='cross' src={cross} alt="cross"></img> : <img className='menu' src={menu} alt="menu"></img>}
            </div>
        </div>
    )
}

export default Navbar

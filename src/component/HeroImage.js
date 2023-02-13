import "./heroImage.css"
import profile from "../assets/profile_photo.jpg"
import React from 'react'
import { Link } from "react-router-dom"

const HeroImage = () => {

    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src="https://media.istockphoto.com/id/1182529932/photo/workplace-desk-with-computer-at-window-in-office-at-home-in-apartment.jpg?s=612x612&w=0&k=20&c=GWNRgerMA6ev7N_VYjJ5qOOfHpY1ir__U1vfa_1I5j0=" alt="intro-img"></img>
            </div>
            <div className="porfile-photo"><img src={profile} alt="ima"></img></div>

            <div className="content">
                <p>HI, I'M TARUN KUMAR..</p>
                <div className="sliding">
                <div className="profession-box">
                    <h1 className="item">NodeJS Developer</h1>
                    <h1 className="item">React Developer</h1>
                    <h1 className="item">Freelancer </h1>
                    <h1 className="item">FullStack Developer</h1>
                </div>
            </div>
                <div className="btns">
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn-light">Contact</Link>
                </div>

            </div>
        </div>
    )
}

export default HeroImage
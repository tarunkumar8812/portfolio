import "./heroImage2.css"
// import introImg from "../assets/pexels-lukas-317385.jpg"

import React from 'react'

const HeroImage2 = (props) => {
    return (
        <div className="hero-img">
            <img src={props.ii} alt="ima"></img>
            <div className="heading">
                <h1 > {props.heading}</h1>
                <p>{props.projectList}</p>
                {/* <img className="intro-img" src={introImg} alt="intro-img"></img> */}
            </div>
            {/* <div className="content">
                <p>Project 1</p>
                <h1>Project 2</h1>

            </div> */}
        </div>
    )
}

export default HeroImage2
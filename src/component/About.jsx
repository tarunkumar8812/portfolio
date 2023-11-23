import React, { useState } from 'react'
import aboutPic from '../assets/aboutPic.jpg'
import js from "../imgs/javascript.png"
import postman from "../imgs/postman.jpg"
import node from "../imgs/node.png"
import react from "../imgs/react.jpg"
import mongo from "../imgs/mongo.png"
import git from "../imgs/git.png"
import html from "../imgs/html.jpg"
import css from "../imgs/css.jpg"
import express from "../imgs/express.png"
import mysql from "../imgs/mysql.png"
import mui from "../imgs/MUI.png"

import "./about.css"

const About = () => {

    const frontedSkill = [js, react, html, css, mui]
    const backendSkill = [node, mongo, express, git, mysql, postman]

    const [activeTab, setActiveTab] = useState(1)


    const handleClick = (n) => {
        setActiveTab(n)
    }


    return (
        <>
            <div className='about-container'>
                <div className='row'>
                    <div className='about-col-1'>
                        <img src={aboutPic} alt='img' ></img>
                    </div>
                    <div className='about-col-2'>
                        <h1 className='sub-title'>About Me</h1>
                        <p>Hello, I am Tarun Kumar, having Gradution Degree from Delhi Univercity and Civil Engineering Diploma. I worked as Site Engineer and also have experience in teaching and have taught over 300+ students in Xellent Coaching Center. I am currently a Full-Stack Web Developer, and Trainee at functionUp Bootcamp for FullStack Web development using JavaScript, NodeJS, ReactJS, ExpressJS, MongoDB, MySQL, and also AWS S3, Redis, Material-UI, HTML & CSS. I have completed various projects such as Booking Website, Online Book Store, Note Making App, e-commerce website, blogging site, URL shortener, and college internship portal.</p>

                        <br />
                        <p>
                            My goal is to work with a reputed company for a successful career in the Web Development field. I am confident that my skills and project experience make me a strong fit for this role. I am a self-motivated, hard-working, and disciplined individual with strong communication and problem-solving skills. I am confident that I can make a valuable contribution to your company and believe that my skills and project experience make me a strong fit for this role in Web Development. Thank you for considering me for this opportunity.
                        </p>


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
                                <li><span>2013</span> <br /> 12th from C.B.S.E Board, Delhi</li>
                                {/* <li><span>2011</span> <br /> 10th from C.B.S.E Board, Delhi</li> */}

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About

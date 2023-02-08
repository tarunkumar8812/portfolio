import React from 'react'
import "./footer.css"
import home from "../imgs/home.png"
import phone from "../imgs/phone.png"
import gmail from "../imgs/gmail.png"
import fb from "../imgs/fb.png"
import linkedin from "../imgs/linkedin.png"
import instagram from "../imgs/instagram.png"
import twitter from "../imgs/twitter.png"
import github from "../imgs/github.png"

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-container'>
                    <div className='f-left'>

                        <div className='location'>
                            <img className='imgs' src={home} alt="img"></img>
                            <span className='address'>
                                <p>Dakshin Puri, New Delhi-110062</p>
                            </span>
                        </div>
                        <div className='phone'>
                            <img className='imgs' src={phone} alt="img"></img>
                            <p>+91 858 689 3180</p>
                        </div>
                        <div className='email'>
                            <img className='imgs' src={gmail} alt="img"></img>
                            <p>tarunkumarkoli.tk@gmail.com</p>
                        </div>
                        {/* <div className='info'>
                            <h4>About the company</h4>
                            <p>This is me Tarun Kumar. CEO & Founder of This company.</p>
                            <p>I enjoy discussing new projects and design challanges</p>
                            <br />
                            <p>Copyright 2022. All rights resevered</p>
                            <p>Terms & Conditions</p>
                        </div> */}
                        <div className='social-media'>
                            <a href="https://www.facebook.com/TarunKoli.TK/" >  <img className='imgs' src={fb} alt="fb"></img></a>
                            
                            <a href="https://www.twitter.com/" >
                                <img className='imgs' src={twitter} alt="twitter"></img>
                            </a>

                            <a href="https://www.instagram.com/tarunkoli.tk/" >
                                <img className='imgs' src={instagram} alt="instagram"></img>
                            </a>

                            <a href="https://www.linkedin.com/in/tarun-kumar-aba208201/" >
                                <img className='imgs' src={linkedin} alt="linkedin"></img>
                            </a>

                            <a href="https://github.com/tarunkumar8812/" >
                                <img className='imgs' src={github} alt="github"></img>

                            </a>
                        </div>

                    </div>
                    {/* -------------------right part------------------- */}
                    <div className='f-right'>

                    <div className='info'>
                            <h4>About me</h4>
                            <p>This is me Tarun Kumar. NodeJS and Backend Developer.</p>
                            <p>I enjoy discussing new projects and design challanges</p>
                            <br />
                            <p>Copyright 2022. All rights resevered</p>
                            <p>Terms & Conditions</p>
                        </div>
                     
                    </div>


                </div>
            </div>
        </>
    )
}

export default Footer
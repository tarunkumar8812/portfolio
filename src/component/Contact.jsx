import React, { useState } from 'react'
import fb from "../imgs/fb.png"
import linkedin from "../imgs/linkedin.png"
import instagram from "../imgs/instagram.png"
import twitter from "../imgs/twitter.png"
import github from "../imgs/github.png"
import phone from "../imgs/phone.png"
import gmail from "../imgs/gmail.png"

import './contact.css'

const Contact = () => {

    const [successMessage, setSuccessMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [credentials, setCredentials] = useState({ name: "", email: "", message: "" })


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
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
            <div className='contact-container'>
                <h1 className='sub-title'>Contact Me</h1>
                <div className='row'>
                    <div className='contact-left'>
                        <div className='social-icons'>
                            <p><img className='icons' src={gmail} alt='iconImg' ></img>tarunkumarkoli.tk@gmail.com</p>
                            <p><img className='icons' src={phone} alt='iconImg' ></img>+91 8586893180</p>
                            <a href='https://www.facebook.com'> <img className='icons' src={fb} alt='iconImg' ></img> facebook</a>
                            <a href='https://www.twitter.com'> <img className='icons' src={twitter} alt='iconImg' ></img>twitter</a>
                            <a href='https://www.instagram.com'> <img className='icons' src={instagram} alt='iconImg' ></img>instagram</a>
                            <a href='https://www.linkedin.com'> <img className='icons' src={linkedin} alt='iconImg' ></img>linkedin</a>
                            <a href='https://www.linkedin.com'> <img className='icons' src={github} alt='iconImg' ></img>GitHub</a>
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
            
        </>
    )
}

export default Contact
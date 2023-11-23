import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import HeroImage2 from '../component/HeroImage2'
import { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../component/mailme.css'
import { Link } from 'react-router-dom'
// import Mailus from '../component/Mailus'
// import Mailme from '../component/Mailme'

const Contact = () => {

    // const [user, setUser] = useState({ name: "", subject: "", email: "", message: "" })


    const formRef = useRef()

    const [done, setDone] = useState(false)

    // const theme = useContext(ThemeContext)
    // const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault()

        // emailjs.sendForm('service_pry546x', 'tqg6334', formRef.current, 'ACvcfr3BPnQ3gYWR8')
        emailjs.sendForm('service_pry546x', 'template_z8z9rqn', formRef.current, 'ACvcfr3BPnQ3gYWR8')
            .then((result) => {
                setDone(true)
                console.log(result);

            }, (error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div>
                <Navbar /></div>
            <div><HeroImage2 heading="Connect with me." projectList="now..."
                ii='https://wallpapercave.com/wp/wp8358499.jpg' /></div>
            {/* <Mailme /> */}
            <div className='c'>
                {/* <div className='c-bg'></div> */}
                <div className='c-wrapper'>

                    {/* ---------right part------------- */}

                    <div className='c-right'>
                        <h3 className='c-desc'>
                            <b> What is your story? Get in touch. always freelancing if the right comes along.</b>
                        </h3>
                        {/* ------- form is staring here --------- */}
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type='text' name='user_name' className='' placeholder='Your Name' autoComplete='off' ></input>
                            <input type='text' name='user_email' className='' placeholder='Your Email' autoComplete='off'  ></input>
                            <input type='text' name='user_subject' className='' placeholder='Subject' autoComplete='off' ></input>
                            <textarea className='textArea' placehoder='Type your Message' autoComplete='off' name='message' ></textarea>
                            <button className='btn' >send message</button>
                            {done && <Link to="/home"><div className='success'>Message Sent Successfully, Thank you. </div></Link>}
                        </form>
                        {/* ------- form is ending here --------- */}

                    </div>

                </div>
            </div>
            <div> <Footer /></div>
        </>
    )
}

export default Contact
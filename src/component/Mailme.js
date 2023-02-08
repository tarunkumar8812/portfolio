import React, { useRef, useState, useContext } from 'react'
import './mailme.css'

import emailjs from '@emailjs/browser'
const Mailme = () => {

    const [user, setUser] = useState({ name: "", subject: "",email: "", message: ""})


    const formRef = useRef()

    const [done, setDone] = useState(false)

    // const theme = useContext(ThemeContext)
    // const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_yl2iccf', 'template_z8z9rqn', formRef.current, 'ACvcfr3BPnQ3gYWR8')
            .then((result) => {
                setDone(true)
                console.log("++++++result.text");

            }, (error) => {
                console.log("error.text");
            });
    }

    return (
        <>
            <div className='c'>
                {/* <div className='c-bg'></div> */}
                <div className='c-wrapper'>

                    {/* ---------right part------------- */}
                    Mail me
                    <div className='c-right'>
                        <h3 className='c-desc'>
                            <b> What is your story? </b>Get in touch. always freelancing if the right comes along.
                        </h3>
                      
                        {/* ------- form is staring here --------- */}
                        <form   ref={formRef} onSubmit={handleSubmit}>
                            <input type='text' name='user_name' className='' placeholder='Name' autoComplete='off' ></input>
                            <input type='text' name='user_subject' className='' placeholder='Subject' autoComplete='off' ></input>
                            <input type='text' name='user_email' className='' placeholder='Your Email' autoComplete='off'  ></input>
                            <textarea className='textArea' placehoder='Message' autoComplete='off' name='message' ></textarea>
                            <button className='btn' >submit</button>
                            {done && " Thank You... mail sent Successfully!!"}
                        </form>
                        {/* ------- form is ending here --------- */}

                    </div>

                </div>
            </div>
        </>
    )
}

export default Mailme

// service_ipp0lqm
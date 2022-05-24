import './index.scss';
import { Loader } from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    
    // Reference from the FORM 
    const form = useRef()


    useEffect(() => {   
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000) // 3 seconds
     }, [])

    
    // event
     const sendEmail = (event) => {
        //  it will stop before submitting so call the e-prevent default method and using email.js library
        event.preventDefault()
        
        emailjs
            // .sendForm(
            //     'gmail',
            //     'template_di0p0ap', // from Emailjs account. Email Template ID
            //     form.current,
            //     '8eB8y-k5t3iLSjTImfFuv' // Token  Also called Service ID
            // )
                .sendForm(
                    'service_7slzeor', // Service ID
                    'template_di0p0ap', // template ID
                    form.current,
                    '4A1KTaLELdDqmPkMZ' // Public Key

                )
            
            // Send message to the user
            .then(
                () => {
                  alert('Message successfully sent!')
                  window.location.reload(false)
                },
                () => {
                  alert('Failed to send the message, please try again')
                }
              )
          }
    

    return (
        <>
         <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
                    idx={15}
                     />
                </h1>
                <p>
                In omnis fuga eos odit labore ut animi magni et asperiores necessitatibus et nostrum distinctio aut distinctio accusantium. Aut deserunt eveniet eos ipsam eius sit omnis porro quo repudiandae quisquam in omnis inventore et debitis minima.
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            {/*NAME  */}
                            <li className="half">
                                <input 
                                type="text" 
                                name="name" 
                                placeholder="Name" 
                                required
                                />
                            </li>
                            {/*  EMAIL  */}
                            <li className="half">
                                <input 
                                type="email"
                                 name="email" 
                                 placeholder="Email" 
                                 required
                                 />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required
                                 />
                            </li>
                            {/* MESSAGE */}
                            <li>
                                <textarea 
                                placeholder="Message"
                                name="message"
                                required
                                >
                                </textarea>
                            </li>
                            {/* SEND */}
                            <li>
                                <input 
                                type="submit"
                                className="flat-button"
                                value="SEND"
                                />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
         </div>
         <Loader type="pacman" />
        </>
    )
}





export default Contact;
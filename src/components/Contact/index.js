import './index.scss';
import { Loader } from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer } from 'react-leaflet';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    
    // Reference from the FORM 
    const form = useRef()


    useEffect(() => {   
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000) // 3 seconds
     }, [])

    
    // SendEmail function
     const sendEmail = (e) => {
        //  it will stop before submitting so call the e-prevent default method and using email.js library
        e.preventDefault()
        
        emailjs   
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
                The prospect of new opportunities intrigues me. Let's talk, I'm glad you stopped by. Would love to hear from you!
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            {/*NAME  */}
                            <li className="half">
                                <input 
                                type="text" 
                                name="user_name"
                                placeholder="Name" 
                                required
                                />
                            </li>
                            {/*  EMAIL  */}
                            <li className="half">
                                <input 
                                type="email"
                                 name="user_email" 
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
            <div className="info-map">
                Mi-Ann Hartman
                <br />
                California, United States
                <br />
                Rohnert Park,Expy W <br />
                <span>miannmhartman@gmail.com</span>

            </div>
            {/* === MAP  */}
            <div className="map-wrap">
                <MapContainer center={[38.349964705017186, -122.72343481567502]} zoom={13}>
                        <TileLayer url=""/>
                </MapContainer>
            </div>
         </div>
         <Loader type="pacman" />
        </>
    )
}





export default Contact;
import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import{AiOutlineWhatsApp} from 'react-icons/ai'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = ()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_de5k3ce', 'template_ov5vzhp', form.current, 'H16lMlwr0EF00MBtM')
        e.target.reset();
    };
    return (
        <section id = "contact">
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className = "contact_options">
                    <article className = "contact_option">
                        <HiOutlineMail />
                        <h4>Email</h4>
                        <h5>g1125189291@gamil.com</h5>
                        <a href="mailto:g1125189291@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className = "contact_option">
                        <AiOutlineWhatsApp />
                        <h4>Whatsapp</h4>
                        <h5></h5>
                        <a href="https://api.whatsapp.com/send?phone=+15488810377" target="_blank">Send a message</a>
                    </article>
                </div>
                {/*end of contact info*/}
                <form  ref={form} onSubmit={sendEmail}>
                    <input type = "text" name="name" placeholder="Your Full Name" required />
                    <input type = "email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows = "7" placeholder = "Your Message" required></textarea>
                    <button type="submit" className = "btn btn-primary">Send Message</button>
                </form>
            </div>
            
        </section>
    )
        
}

export default Contact
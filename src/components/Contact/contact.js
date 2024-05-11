import React, { useRef } from 'react';
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import Adobe from '../../assets/adobe.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1hlp084', 'template_eqixdsd', form.current, {publicKey: 'zK-k3H-UU9QwkwNce',}).then(() => 
            {
                console.log('SUCCESS!');
                e.target.reset();
                alert('Email Sent !');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };
    return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>
                My Clients
            </h1>
            <p className='clientsDesc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam
            </p>
            <div className='clientImgs'>
                <img src={Walmart} alt='Client' className='clientImg' />
                <img src={Adobe} alt='Client' className='clientImg' />
                <img src={Microsoft} alt='Client' className='clientImg' />
                <img src={Facebook} alt='Client' className='clientImg' />
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>
                Contact Me
            </h1>
            <span className='contactDesc'>
                Please fill out the form below to discuss any work opportunities.
            </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name' />
                <input type='text' className='email' placeholder='Your Email' name='from_email' />
                <textarea name='message' rows={5} placeholder='Your Message' className='message' ></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt='Facebook' className='link' />
                    <img src={TwitterIcon} alt='Twitter' className='link' />
                    <img src={YoutubeIcon} alt='Youtube' className='link' />
                    <img src={InstagramIcon} alt='Instagram' className='link' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
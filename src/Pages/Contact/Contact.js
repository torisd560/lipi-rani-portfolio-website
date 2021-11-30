import React, { useRef } from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_wvsy06c', 'template_5v6i1dl', e.target, 'user_fRLWbQWXPWE0cBdGm0jmr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div className='text-center' style={{ marginTop: '150px' }}>
            <h2>Get In <span style={{ borderBottom: '1px solid #64ffda' }}>Touch</span></h2>
            <form onSubmit={sendEmail} className='contact-form my-5 p-5 mx-auto w-50'>
                <input type="text" name="name" placeholder='Name' />
                <br />
                <input type="email" name="email" placeholder='Email' />
                <br />
                <textarea name="message" placeholder='Message' />
                <br />
                <input style={{ backgroundColor: '#28a745', color: '#fff' }} type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;
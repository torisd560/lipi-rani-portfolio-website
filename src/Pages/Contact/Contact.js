import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';

export const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_wvsy06c', 'template_5v6i1dl', e.target, 'user_fRLWbQWXPWE0cBdGm0jmr')
            .then((result) => {
                if (result.status === 200) {
                    alert('Message send succesfully')
                }
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className='text-center' style={{ marginTop: '60px' }}>
                    <h1 className='text-center mb-5'>Get In <span style={{ borderBottom: '1px solid #64ffda' }}>Touch</span></h1>
                    <div>
                        <form onSubmit={sendEmail} className='contact-form mb-5 p-5'>
                            <input type="text" name="name" placeholder='Name' className=' w-100' />
                            <br />
                            <input type="email" name="email" placeholder='Email' className=' w-100' />
                            <br />
                            <textarea name="message" placeholder='Message' className=' w-100' />
                            <br />
                            <input style={{ backgroundColor: '#28a745', color: '#fff' }} type="submit" value="Send" className=' w-100' />
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    );
};

export default Contact;
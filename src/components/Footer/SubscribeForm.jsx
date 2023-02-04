import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const SubscribeForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_EMAILJS_USER_ID}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setFullName('')
      setEmail('')
      setMessage('')
      alert('Email Sent!')
  };

  

  return (
    <div className="app__newsletter-input flex__center">
        <form ref={form} onSubmit={sendEmail} className='contact_form'>
          <input id="full_name" value={fullName} type="text" name='name' placeholder='Your Full Name' onChange={e => setFullName(e.target.value)} required />
          <input id="email" value={email} type="email" name='email' placeholder='Your Email' onChange={e => setEmail(e.target.value)} required />
          <textarea id="message" value={message} name="message" rows="7" placeholder='Your Message' onChange={e => setMessage(e.target.value)} required></textarea>
          <div className='form__btn'>
          <button type='submit' className='custom__button'>Send Message</button>
          </div>
        </form>
    </div>
  );
};

export default SubscribeForm;


import React from 'react';
import { SubHeading } from '../../components';
import './FindUs.css';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>

    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className='p__opensans'>135 West Front St., Berwick, Pa 18603</p>
        <p className='app__footer-headtext' style={{ color: 'var(--color-crimson)', margin: '2rem 0'}}>Hours</p>
        <p className='p__opensans'>Sunday: Closed</p>
        <p className='p__opensans'>Monday: Closed</p>
        <p className='p__opensans'>Tuesday: Closed</p>
        <p className='p__opensans'>Wednesday: 12PM - 8PM</p>
        <p className='p__opensans'>Thursday: 12PM - 8PM</p>
        <p className='p__opensans'>Friday: 12PM - 10PM</p>
        <p className='p__opensans'>Saturday: 9AM - 10PM</p>
      </div>
      <a href='https://goo.gl/maps/vud6pSGbNFJ1KKD99' target='_blank'><button className='custom__button'  style={{marginTop: '2rem'}}>Visit Us</button></a>
    </div>

    <div className="app__wrapper_img">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.6737064436047!2d-76.23722874869188!3d41.054264079194574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c59d675eb846f7%3A0xce266a57b63dc91a!2sAnomaly%20Craft%20Brewing!5e0!3m2!1sen!2sus!4v1674180656447!5m2!1sen!2sus" 
              width="600" 
              height="450" 
              style={{border:0}}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
);

export default FindUs;

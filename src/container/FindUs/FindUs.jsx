import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'
import './FindUs.css';


const FindUs = () => (
  <div className='app__bg app__wrapper__container section__padding' id='contact'>
      <div className="app__wrapper_info2">
        <SubHeading title="Contact" />
          <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
          <div className="img_logo_1" >
            <img src={images.logo_main} alt="anomaly logo" /> 
          </div>
           <div className="img_logo_2" >
            <img src={images.anomalyxrebz} alt="anomalyxrebz logo" /> 
          </div>
      </div>
            <div className="app__wrapper-inside">
              <div className='app__findus-berwick'>
                <h3 className='app__findus-subheadtext'> Berwick Location</h3>
                  <p className='p__opensans'>135 West Front St., Berwick, Pa 18603</p>
                  <p className='app__findus-headtext' style={{ color: 'var(--color-crimson)', margin: '2rem 0'}}>Hours</p>
                  <p className='p__opensans'>Sunday: Closed</p>
                  <p className='p__opensans'>Monday: Closed</p>
                  <p className='p__opensans'>Tuesday: Closed</p>
                  <p className='p__opensans'>Wednesday: 12PM - 8PM</p>
                  <p className='p__opensans'>Thursday: 12PM - 8PM</p>
                  <p className='p__opensans'>Friday: 12PM - 09PM</p>
                  <p className='p__opensans'>Saturday: 9AM - 09PM</p>
                <a href='https://goo.gl/maps/vud6pSGbNFJ1KKD99' target='_blank' rel="noreferrer"><button className='custom__button'  style={{marginTop: '2rem'}}>Visit Us</button></a>
              </div>
                
              <div className='app__findus-williamsport'>
                <h3 className='app__findus-subheadtext2'> Williamsport Location</h3>
                  <p className='p__opensans'>913 Arch St., Williamsport, Pa 17701</p>
                  {/* <p className='p__opensans'>OPENING WEDNESDAY, SEPTEMBER 2, 2026 - 4PM</p> */}
                  <p className='app__findus-headtext' style={{ color: 'var(--color-crimson)', margin: '2rem 0'}}>Hours</p>
                  <p className='p__opensans'>Sunday: Closed</p>
                  <p className='p__opensans'>Monday: Closed</p>
                  <p className='p__opensans'>Tuesday: Closed</p>
                  <p className='p__opensans'>Wednesday: 04PM - 09PM</p>
                  <p className='p__opensans'>Thursday: 04PM - 09PM</p>
                  <p className='p__opensans'>Friday: 12PM - 09PM</p>
                  <p className='p__opensans'>Saturday: 12PM - 09PM</p> 
                <a href="https://maps.app.goo.gl/DSjvhGTtumYsDQHh9" target="_blank" rel="noreferrer"><button className='custom__button'  style={{marginTop: '2rem'}}>Visit Us</button></a>
              </div>
                
            </div>
       
        
      
     
    
  </div>
);

export default FindUs;

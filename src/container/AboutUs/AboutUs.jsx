import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';
import TeamPic from '../../assets/Meet Our Team.png'


const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.logo_main} alt="anomaly logo" />
    </div>
    
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>Rebz</h1>
        {/* <img src={images.spoon} alt="about__spoon" className='spoon__image' /> */}
        <p className="p__opensans">
        As Anomaly grew, so did the opportunity to bring something new to the table. In Williamsport, we’re joining forces with Rick from Rebz Pizza, bringing his Detroit-style pizza together with our craft beer under one roof.
Two local businesses, two passions, one space—and a whole lot of good food, good beer, and good people. We’re proud to welcome Rick and Rebz into the Anomaly family as we continue to grow together.
        </p>
      </div>

      <div className="app__aboutus-content_btn">
        {/* <a href={TeamPic}
          target="_blank">
          <button type='button' className='custom__button'>Our Team</button>
        </a> */}
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Anomaly</h1>
        {/* <img src={images.spoon} alt="history__spoon" className='spoon__image' /> */}
        <p className="p__opensans">
        Anomaly started with humble beginnings—a family coffee shop by MaryLou Oliver that became a brewery in 2022 under Nicholas Oliver. 
        What began as a leap of faith coming back from a deployment, grew into a place built around good beer, good people, and community. Today, we’re proud to keep growing while staying true to where we started: family, faith, and a love for what we do. All beer credit goes to our Head Brewer: Steve Zourides.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;

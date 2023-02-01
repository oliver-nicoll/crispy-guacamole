import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.logo_main} alt="anomaly logo" />
    </div>
    
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about__spoon" className='spoon__image' />
        <p className="p__opensans">
        Anomaly Craft Brewing is a family-owned brewery located in the heart of the community. We were established in 2022 as a rebranding of Marylou's Coffee Shop, which had been a staple in the area for 20 years. Our brewery is built on the pillars of faith-led decisions, community support, and a love for the brewing process. Our goal is to provide a warm and welcoming atmosphere where customers can enjoy a delicious craft beer and feel like part of the family.
        </p>
      </div>

      <div className="app__aboutus-content_btn">
        <a href='https://www.instagram.com/reel/CnkfwDMpt0C/?igshid=YWJhMjlhZTc=
          https://www.instagram.com/reel/CnkfwDMpt0C/?igshid=YWJhMjlhZTc=' 
          target="_blank"
        >
          <button type='button' className='custom__button'>Our Team</button>
        </a>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="history__spoon" className='spoon__image' />
        <p className="p__opensans">
        Anomaly Craft Brewing has its roots in A Perfect Blend, a tea house established by Marylou Oliver in 2002. Over the years, Marylou's passion for good food and drink evolved and A Perfect Blend became known for its excellent coffee, teas, and baked goods. As the business passed on to her grandson Nicholas Oliver and his family, they decided to rebrand as Anomaly Craft Brewing and bring their unique blend of faith, family, and beer to customers. 
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;

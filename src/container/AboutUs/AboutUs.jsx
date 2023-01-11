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
           Nicholas Oliver has taken over the legacy of A Perfect Blend Espresso & More, a 20-year-old business started by his grandmother Mary Lou Oliver, in honor of his late grandfather Arden Oliver. The business has rebranded as Anomaly Craft Brewing, offering the same food, coffee, and staff as before, but also adding new dinners and craft beer. Anomaly Craft Brewing can be found on social media at @anomalycraftbrewing.
        </p>
        <button type='button' className='custom__button'>Know More!</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about__knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="history__spoon" className='spoon__image' />
        <p className="p__opensans">
        Established in 2022 as the new brewery on the block. Anomaly took over A Perfect Blend Esspresso and more as a last ditch effort to stay afloat. The coffee shop was in the family for 20 years before Nicholas Oliver took over the reigns and started the path of owning a brewery. The name Anomaly came through a military friend who suggested the name since Nicholas doesn’t drink... But don’t worry we have an expert master Brewer on our team - Steve-O.
        </p>
        <button type='button' className='custom__button'>Know More!</button>
      </div>

    </div>
  </div>
);

export default AboutUs;

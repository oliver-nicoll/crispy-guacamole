import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Owner's Message" />
      <h1 className='headtext__cormorant'>What We Believe in</h1>

      <div className="app__owner-content">
        <div className="app__owner-content_quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>
            Our mission is to make decisions led by faith & grace.  
          </p>
        </div>
        <p className="p__opensans"> Give back to the community who supports us & all for the love of brews.</p>
      </div>

      <div className="app__owner-sign">
        <p>Nicholas Oliver</p>
        <p className="p__opensans">Anomaly Craft Brewing Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;

import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.owner} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Owner's Message" />
      <h1 className='headtext__cormorant'>What We Believe in</h1>

      <div className="app__owner-content">
        <div className="app__owner-content_quote">
          <p className='p__opensans'>
            It is an honor to take over the family business of A Perfect Blend Espresso & More. For 20 years the coffee shop has been a staple in the town of Berwick - a perfect little secret space to meet friends & family. Adding a little bit of spice & making it a brewery in honor of my late grandfather, Arden, Anomaly was born. As an anomaly myself, according to my one military buddy, I don't drink alcohol, yet I made Anomaly Craft Brewing happen. We have the best brewer, Stev-o Zourides. Together we make Anomaly the best of both worlds - Coffee & Craft Beer. 
          </p>
        </div>
        <p className="p__opensans"> Our mission is to make decisions led by faith & grace. Give back to the community who supports us & all for the love of brews.</p>
      </div>

      <div className="app__owner-sign">
        <p>Nicholas Oliver</p>
        <p className="p__opensans">Owner</p>
      </div>
    </div>
  </div>
);

export default Chef;

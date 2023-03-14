import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className='app__header-h1'>The Key to Brewing & Smoked Meats</h1>
      <p className='p__opensans header' style={{margin: '2rem 0', color: 'white'}}>
      Experience the fusion of fire and flavor as Anomaly Craft Brewing takes brewing and smoked meats to a whole new level, where every sip and bite is a symphony of smoky goodness, perfectly crafted with passion and precision.
      </p>
      <a href="#menu"><button type='button' className='custom__button'>Explore Menu</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.food16} alt="header img" />
    </div>
  </div>
);

export default Header;

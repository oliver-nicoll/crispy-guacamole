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
      Brewing beer is a sensitive art, and the more control you have over the process, the better your results are going to be.   
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.food2} alt="header img" />
    </div>
  </div>
);

export default Header;

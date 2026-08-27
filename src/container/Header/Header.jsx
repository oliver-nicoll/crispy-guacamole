import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className='app__header-h1'>Where Good Beer Goes Off Script</h1>
      <p className='p__opensans header' style={{margin: '2rem 0', color: 'white'}}>
      We brew it. We pour it. We occasionally put it in a firetruck. Around here, good beer is meant to be enjoyed, shared, and maybe even taken for a ride. We’re here to make great craft beer, have a good time doing it, and give you something worth coming back for.
      </p>
      {/* <a href="#menu"><button type='button' className='custom__button'>Explore Menu</button></a> */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.pretz} alt="header img" />
    </div>
  </div>
);

export default Header;

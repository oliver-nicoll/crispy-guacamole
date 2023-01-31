import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">135 West Front Street, Berwick, Pa</p>
        <p className="p__opensans">+1 570-752-3522</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo_main} alt="footer_logo" />
        <p className="p__opensans">&quot;Faith - Community - Brews&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Wednesday/ Thursday:</p>
        <p className="p__opensans">08:00 am - 08:00 pm</p>
        <p className="p__opensans">Friday:</p>
        <p className="p__opensans">08:00 am - 10:00 pm</p>
        <p className="p__opensans">Saturday:</p>
        <p className="p__opensans">10:00 am - 10:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Nicoll Oliver. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
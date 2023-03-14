import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import {FaTiktok} from 'react-icons/fa'
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
        <p className="p__opensans">+1-570-752-3522</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo_main} alt="footer_logo" />
        <p className="p__opensans">&quot;Faith - Community - Brews&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
        <a href="https://www.facebook.com/people/Anomaly-Craft-Brewing/100086135710308/" target="_blank"> <FiFacebook /></a>
        <a href="https://www.tiktok.com/@anomalycraftbrewing?lang=en" target="_blank"><FaTiktok /></a>
        <a href="http://instagram.com/anomalycraftbrewing" target="_blank"><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Sunday/Monday/Tuesday:</p>
        <p className="p__opensans">CLOSED.</p>
        <p className="p__opensans">Wednesday/ Thursday:</p>
        <p className="p__opensans">06:00 am - 08:00 pm</p>
        <p className="p__opensans">Friday:</p>
        <p className="p__opensans">06:00 am - 10:00 pm</p>
        <p className="p__opensans">Saturday:</p>
        <p className="p__opensans">09:00 am - 10:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <small className='p__opensans'>&copy; Made By: Nicoll Oliver. All rights reserved. </small>
    </div>

  </div>
);

export default Footer;
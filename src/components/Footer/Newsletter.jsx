import React from 'react';
import SubscribeForm from './SubscribeForm';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';


const Newsletter = () => (
  <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="questions?" />
        <h1 className="headtext__cormorant">message us</h1>
      </div>
      <div className="app__newsletter-input flex__center">
        <SubscribeForm/>
      </div>
  </div>
);

export default Newsletter;

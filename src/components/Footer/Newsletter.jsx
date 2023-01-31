import React from 'react';
import SubscribeForm from './SubscribeForm';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const url = `${process.env.REACT_APP_MAILCHIMP_KEY}`

const Newsletter = () => (
  <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      </div>
      <div className="app__newsletter-input flex__center">

        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <SubscribeForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
    
      </div>
  </div>
);

export default Newsletter;

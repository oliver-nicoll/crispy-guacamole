import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.AnomalyFamTruck} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Owner's Message" />
      <h1 className='headtext__cormorant'>Our Message to You</h1>

      <div className="app__owner-content">
        <div className="app__owner-content_quote">
          <p className='p__opensans'>
            Anomaly started with humble beginnings, a lot of faith, and a dream to build something of our own. Today, we're proud to call both Berwick and Williamsport, Pennsylvania home with our second location, Anomaly X Rebz.
<br></br>We believe small businesses are stronger when they support one another. We believe in collaboration, community, and creating spaces where people feel welcome. We love supporting local businesses, organizations, events, and the people who make our communities what they are.

<br></br>Most importantly, thank you to the people who took a chance on us. The ones who stepped outside their usual routine, tried something new, came back, brought their friends, and gave us the opportunity to grow. We know loyalty runs deep, and choosing something different means a lot.

You're the real ones who helped us get here.

<br></br>As parents of five boys, we're building something we hope our kids can be proud of—not just a business, but something that gives back to the communities they grow up in.

Our decisions are guided by faith, family, grace, and a genuine desire to give back.

From Berwick to Williamsport, thank you for growing with us.
          </p>
        </div>
        </div>

      <div className="app__owner-sign">
        <p>Nicholas Oliver & Family</p>
      </div>
    </div>
  </div>
);

export default Chef;

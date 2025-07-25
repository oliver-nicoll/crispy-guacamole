import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'
import './SpecialMenu.css';
import menudoc from '../../assets/ANOMALY/Anomaly Menu 2025.pdf';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palette" />
      <h1 className='headtext__cormorant'> Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_coffee flex__center">
        <p className='app__specialMenu-menu_heading'>All Time Favorites</p>
        <div className="app__specialMenu-menu_items">
          {data.coffees.map((coffee, index) => (
            <MenuItem key={coffee.title + index} title={coffee.title} price={coffee.price} tags={coffee.tags}/>

          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.shine} alt="coffee beer img" />
      </div>

      <div className="app__specialMenu-menu_beer flex__center">
        <p className='app__specialMenu-menu_heading'>Craft Beers</p>
        <div className="app__specialMenu-menu_items">
          {data.beers.map((beer, index) => (
            <MenuItem key={beer.title + index} title={beer.title} price={beer.price} tags={beer.tags}/>
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop: '15px'}}>
    <a href={menudoc} download="Anomaly Menu" target="_blank"><button type='button' className="custom__button">Food Menu</button></a>
    </div>
  </div>
);

export default SpecialMenu;

import React, {useState} from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'
import './SpecialMenu.css';

import berwickMenu from '../../assets/ANOMALY/BERWICK MENU - Sept 2026.pdf';
import williamsportMenu from '../../assets/ANOMALY/Williamsport Menu - Sept 2026.pdf';

const SpecialMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div
      className='app__specialMenu flex__center section__padding'
      id='menu'
    >
      <div className="app__specialMenu-title">
        <SubHeading title="Drinks that fits your palette" />
        <h1 className='headtext__cormorant'>Our Taproom</h1>
      </div>

      <div className="app__specialMenu-menu">

        {/* ALL TIME FAVORITES */}
        <div className="app__specialMenu-menu_coffee flex__center">
          <p className='app__specialMenu-menu_heading'>
            All Time Favorites
          </p>

          <div className="app__specialMenu-menu_items">
            {data.alltimefavbeer.map((favbeer, index) => (
              <MenuItem
                key={favbeer.title + index}
                title={favbeer.title}
                price={favbeer.price}
                tags={favbeer.tags}
              />
            ))}
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="app__specialMenu-menu_img">
          <img src={images.shine} alt="Anomaly Craft Brewing" />
        </div>

        {/* CRAFT BEERS */}
        <div className="app__specialMenu-menu_beer flex__center">
          <p className='app__specialMenu-menu_heading'>
            Craft Beers
          </p>

          <div className="app__specialMenu-menu_items">
            {data.beers.map((beer, index) => (
              <MenuItem
                key={beer.title + index}
                title={beer.title}
                price={beer.price}
                tags={beer.tags}
              />
            ))}
          </div>
        </div>

      </div>

      {/* FOOD MENU BUTTONS */}
      <div className="food-menu-buttons">

        <button
          className={`food-menu-btn food-menu-btn--left ${
            activeMenu === 'berwick' ? 'active' : ''
          }`}
          onClick={() =>
            setActiveMenu(activeMenu === 'berwick' ? null : 'berwick')
          }
        >
          <span>Berwick</span>
          <small>Food Menu</small>
        </button>

        <button
          className={`food-menu-btn food-menu-btn--right ${
            activeMenu === 'williamsport' ? 'active' : ''
          }`}
          onClick={() =>
            setActiveMenu(
              activeMenu === 'williamsport' ? null : 'williamsport'
            )
          }
        >
          <span>Williamsport</span>
          <small>Food Menu</small>
        </button>

      </div>

      {/* FOOD MENU POPUP */}
      {activeMenu && (
        <div className="food-menu-overlay" onClick={() => setActiveMenu(null)}>

          <div
            className="food-menu-popup"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="food-menu-close"
              onClick={() => setActiveMenu(null)}
            >
              ×
            </button>

            <h2>
              {activeMenu === 'berwick'
                ? 'Berwick Food Menu'
                : 'Williamsport Food Menu'}
            </h2>

            <iframe
              src={
                activeMenu === 'berwick'
                  ? berwickMenu
                  : williamsportMenu
              }
              title={
                activeMenu === 'berwick'
                  ? 'Berwick Food Menu'
                  : 'Williamsport Food Menu'
              }
            />

          </div>

        </div>
      )}

    </div>
  );
};

export default SpecialMenu;
import React from 'react';
// import { useRef } from 'react';
// import {Link} from 'react-router-dom'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { SubHeading } from '../../components';
// import InstaFeeds from './InstaFeeds';
import {images} from '../../constants';
import './Gallery.css';


const gallery = [images.pizza3, images.bbq, images.pretzel, images.firetruck2, images.pour, images.food16, images.fermenters, images.firet1, images.pizza1]


const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };


  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Anomaly Craft Brewing" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem'}}>
          Come see what we are up to! Follow us on Instagram or Facebook: @anomalycraftbrewing
        </p>
        <a href="https://www.instagram.com/anomalycraftbrewing/" target='_blank'>
          <button type='button' className='custom__button'>View More</button>
        </a>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {gallery.map((image, index) => (
                <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                  <img src={image} alt="gallery_image" />
                </div> 
              ))}
            </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery;

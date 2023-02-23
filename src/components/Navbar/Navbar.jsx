import {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md' 
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  const menuToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <nav className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={images.logo_main} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#mugclub">Mug Club</a></li>
      <li className="p__opensans"><a href="#events">Events</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="https://anomalycraftbrewing.square.site" target="_blank" className='p__opensans'>Order Online</a>
      <div/>
      <a href="tel:+1570-752-3522" className='p__opensans'>Book Table</a>
    </div>
    <div className="app__navbar-smallscrean">
      <GiHamburgerMenu color="var(--color-black)" fontSize={27} onClick={menuToggle} />

    {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
          <ul className='app__navbar-smallscreen_links' onClick={() => setToggleMenu(false)}>
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#about">About</a></li>
            <li className="p__opensans"><a href="#menu">Menu</a></li>
            <li className="p__opensans"><a href="#mugclub">Mug Club</a></li>
            <li className="p__opensans"><a href="#events">Events</a></li>
            <li className="p__opensans"><a href="#contact">Contact</a></li>
            <li className="p__opensans"><a href="https://anomalycraftbrewing.square.site" target="_blank">Order Online</a></li>
            <li className='p__opensans'><a href="tel:+1570-752-3522">Book Table</a></li>
          </ul>
        </div>
        )}
    </div>
  </nav>
  )
}
 


export default Navbar;

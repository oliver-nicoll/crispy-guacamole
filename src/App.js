import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Events, SpecialMenu, Mugclub } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
   <Chef />
    <SpecialMenu />
     <AboutUs />
    
    <Intro />
    {/* <Mugclub /> */}
    <Events />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;

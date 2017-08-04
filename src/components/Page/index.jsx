// Page
import React from 'react';
import { Component } from 'react';
import Navigation from './Navigation'
import About from './About'
import TechLogos from './TechLogos';
import Events from './Events';
import Members from './Members';
import Sponsors from './Sponsors';
import Footer from './Footer';
import './style.css';
// import * as ku from '../../lib/ke-utils';

class Page extends Component {
  render () {
    return (
      <div className='page-wrapper'>
        <Navigation />
        <About />
        <TechLogos />
        <Events />
        <Members />
        <Sponsors />
        <Footer />
      </div>
    )
  }
}

export default Page;

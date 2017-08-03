// Header
import React from 'react';
import './style.css';
import SiteTitle from './SiteTitle'

const Header = () => (
  <header id='header' className='black-background'>
    <div className='section-container container-fluid header-container'>
      <SiteTitle />
      <h2 className='section-sub-title header-text'>Learn Build Grow Succeed</h2>
    </div>

  </header>
);

export default Header;

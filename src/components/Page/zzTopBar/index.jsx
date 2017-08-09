import React from 'react'
import Logo from '../../elements/Logo'
import './style.css'
import SiteTitle from './SiteTitle'
import Navigation from './Navigation'

const TopBar = () => {
  return (
    <div id='top-bar' className='section-container top-bar'>
      <div className='branding'>
        <Logo/>
        <SiteTitle/>
      </div>
      <Navigation/>
    </div>
  )
}

export default TopBar;

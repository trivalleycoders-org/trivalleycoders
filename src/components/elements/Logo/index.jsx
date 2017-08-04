// Logo
import React from 'react';
import { Image } from 'react-bootstrap';
import iLogo from './images/tvc.new.03.svg'
import './style.css';

const Logo = () => (
  <Image id='tvc-logo' src={iLogo} responsive alt="logo" className='green-border tvc-logo'/>
);

export default Logo;

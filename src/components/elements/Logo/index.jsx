// Logo
import React from 'react';
import { Image } from 'react-bootstrap';
import iLogo from './tvc.05.green.02.svg'
import './style.css';

const Logo = () => (
  <Image id='tvc-logo' src={iLogo} responsive alt="logo" className='green-border tvc-logo'/>
);

export default Logo;

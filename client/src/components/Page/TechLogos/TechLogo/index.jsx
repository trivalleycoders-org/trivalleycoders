// TechLogo

import React from 'react';
import { Panel, Image } from 'react-bootstrap';
import * as style from './style.css';

const TechLogo = (props) => (
    <Panel id='tech-logo-panel' className='tech-logo-panel'>
      <Image id='tech-logo-image' className='tech-logo-image' href="http://klequis.com" src={props.url} alt="logo" />
      <h4 id='tech-logo-caption'>{props.name}</h4>
    </Panel>
);

export default TechLogo;

// TechLogo

import React from 'react';
import { Panel, Image } from 'react-bootstrap';
import './style.css';

const TechLogo = (props) => (
    <Panel id='tech-logo-panel' className='tech-logo-panel'>
        <Image id='tech-logo-image' className='tech-logo-image' href="http://klequis.com" src={props.url} alt="logo" />
        <h4 className='small'>{props.name}</h4>
    </Panel>
);

export default TechLogo;

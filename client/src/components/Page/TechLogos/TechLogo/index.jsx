// TechLogo

import React from 'react';
import { Panel, Image } from 'react-bootstrap';
import './style.css';

const TechLogo = (props) => (
    <Panel id='tech-logo-panel' className='tech-logo-panel gray-panel'>
        <Image id='tech-logo-image' className='tech-logo-image' src={props.url} alt="logo" />
        <h4 className='small'>{props.name}</h4>
    </Panel>
);

export default TechLogo;

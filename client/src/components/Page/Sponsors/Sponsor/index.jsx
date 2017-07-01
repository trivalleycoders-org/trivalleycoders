// Sponsor
import React from 'react';
import { Panel, Image } from 'react-bootstrap'
import './style.css';

const Sponsor = (props) => (
  <Panel className='panel-sponsor gray-panel'>
    <div id='sponsor-img-container' className='sponsor-img-container'>
      <Image className='sponsor-img' src={props.picture} responsive alt='sponsor picture' />
    </div>
    <h4 id='sponsor-name' className=''>{props.name}</h4>
    <h5 id='sponsor-tagline' className='sponsor-tagline'>{props.tagLine}</h5>
  </Panel>
);

export default Sponsor;

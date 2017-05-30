// Sponsor
import React from 'react';
import { Panel, Image } from 'react-bootstrap'
import './style.css';

const Sponsor = (props) => (
  <Panel className='panel-sponsor'>
    <div id='sponsor-img-container' className='sponsor-img-container red-background'>
      <Image className='sponsor-img' src={props.picture} responsive alt='sponsor picture' />
    </div>
    <h4 id='sponsor-name' className='orange-background'>{props.name}</h4>
    <h5 id='sponsor-role' className='sponsor-role orange-background'>??</h5>
  </Panel>
);

export default Sponsor;

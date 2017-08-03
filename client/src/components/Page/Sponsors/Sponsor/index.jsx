// Sponsor
import React from 'react';
import { Panel, Image } from 'react-bootstrap'
import './style.css';

const Sponsor = (props) => (
  <div className='panel-sponsor'>
    <div id='sponsor-img-container' className='sponsor-img-container'>
      <img className='sponsor-img' src={props.picture} alt='sponsor' />
    </div>
    <h4 id='sponsor-name' className=''>{props.name}</h4>
    <h5 id='sponsor-tagline' className='sponsor-tagline'>{props.tagLine}</h5>
  </div>
);

export default Sponsor;

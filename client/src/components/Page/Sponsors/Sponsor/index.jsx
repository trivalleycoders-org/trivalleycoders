// Sponsor
import React from 'react';
import * as style from './style.css';

const Sponsor = (props) => (
  <div className='sponsor'>
    <div>
      <img className='sponsor-picture' src={props.picture} alt="sponsor icon"/>
    </div>
    <div className='sponsor-name'>
      {props.name}
    </div>
  </div>
);

export default Sponsor;

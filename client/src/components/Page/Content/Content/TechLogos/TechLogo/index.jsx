// TechLogo

import React from 'react';
import * as style from './style.css';

const TechLogo = (props) => {
  const logoStyle = props.shape === 'square' ? style.logoSquare : style.logoRectangle;
  return (
    <div id='tech-logo' className='tech-logo-wrapper'>
      <div>
        <a href="#">
          <img className='logo-style' src={props.url} alt=""></img>
        </a>
      </div>
      <div>
        {props.name}
      </div>
    </div>
  )
};

export default TechLogo;

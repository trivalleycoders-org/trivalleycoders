// TechLogo

import React from 'react';
import * as style from './style';

const TechLogo = (props) => {
  const logoStyle = props.shape === 'square' ? style.logoSquare : style.logoRectangle;
  return (
    <div id='tech-logo' style={style.wrapper}>
      <div>
        {props.name}
      </div>
      <div>
        <a href="#">
          <img style={logoStyle} src={props.url} alt=""></img>
        </a>
      </div>
    </div>
  )
};

export default TechLogo;

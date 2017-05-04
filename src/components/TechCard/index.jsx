// TechCard
import React from 'react';
import * as style from './style';

const TechCard = (props) => {
  const logoStyle = props.shape === 'square' ? style.logoSquare : style.logoRectangle;
  return (
    <div id='tech-card' style={style.wrapper}>
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

export default TechCard;

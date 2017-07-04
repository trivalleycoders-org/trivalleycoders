// TechLogo

import React from 'react';
import { Panel, Image } from 'react-bootstrap';
import classNames from 'classnames'
import './style.css';

const TechLogo = (props) => {
  const imageStyle = classNames(
    {
      // 'tech-logo-image': true,
      [props.style]: props.style ? true : false,
    }
  )
  return (
    <div className='logo-item'>
      <div className="img-container">
        <img className={imageStyle} src={props.url} alt="logo" />
      </div>
      <span className='logo-text'>{props.name}</span>
    </div>
  );
};

export default TechLogo;

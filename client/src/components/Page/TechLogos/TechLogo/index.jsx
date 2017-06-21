// TechLogo

import React from 'react';
import { Panel, Image } from 'react-bootstrap';
import classNames from 'classnames'
import './style.css';

const TechLogo = (props) => {
  const imageStyle = classNames(
    {
      'tech-logo-image': true,
      [props.style]: props.style ? true : false,
    }
  )
  return (
    <Panel id='tech-logo-panel' className='tech-logo-panel gray-panel'>
      <Image id='tech-logo-image' className={imageStyle} src={props.url} alt="logo" />
      <h4 className='small logo-name'>{props.name}</h4>
    </Panel>
  );
};

export default TechLogo;

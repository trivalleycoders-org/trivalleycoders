// TechLogo

import React from 'react';
import styles from './style.css';

const TechLogo = (props) => {
  const imgStyle = {
    maxHeight: props.maxHeight,
    margin: 'auto',
    display: 'block',
    height: 'auto',
    maxWidth: '100%'
  }
  return (
    <div className={styles.techLogo}>
      <img style={imgStyle} src={props.url} alt="logo" />
      <div className={styles.logoText}>{props.name}</div>
    </div>

  );
};

export default TechLogo;

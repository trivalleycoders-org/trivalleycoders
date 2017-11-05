// Sponsor
import React from 'react';
import styles from './style.css';
import classNames from 'classnames'

const Sponsor = (props) => {
  const imgStyles = {
    maxHeight: 72,
    margin: 'auto',
  }
  return (
    <div className={styles.panelSponsor}>
      <div id='sponsor-img-container' className={styles.sponsorImgContainer}>
        <img style={imgStyles} src={props.picture} alt='sponsor' />
      </div>
      <h4 id='sponsor-name'>{props.name}</h4>
      <h5 id='sponsor-tagline'>{props.tagLine}</h5>
    </div>
  )
};

export default Sponsor;

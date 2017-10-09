// Sponsor
import React from 'react';
import styles from './style.css';

const Sponsor = (props) => (
  <div className={styles.panelSponsor}>
    <div id='sponsor-img-container' className={styles.sponsorImgContainer}>
      <img className={styles.sponsorImg} src={props.picture} alt='sponsor' />
    </div>
    <h4 id='sponsor-name'>{props.name}</h4>
    <h5 id='sponsor-tagline'>{props.tagLine}</h5>
  </div>
);

export default Sponsor;

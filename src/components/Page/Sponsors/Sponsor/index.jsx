// Sponsor
import React from 'react';
import styles from './style.css';

const Sponsor = (props) => {
  const imgStyles = {
    maxHeight: 72,
    margin: 'auto',
    marginBottom: 10,
  }
  return (
    <div className={styles.panelSponsor}>
      <a href={props.url}>
        <img style={imgStyles} src={props.picture} alt='sponsor' />
      </a>

      <h4 id='sponsor-name' className={styles.sponsorName}>{props.name}</h4>
      <h5 id='sponsor-tagline' className={styles.tagLine}>{props.tagLine}</h5>
    </div>
  )
};

export default Sponsor;

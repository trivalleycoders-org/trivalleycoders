// TechLogos
import React from 'react';
import TechLogo from './TechLogo';
import styles from './style.css';
import { logoRow1, logoRow2 } from './logo-data'

const TechLogos = (props) => {


  const renderLogoRow1 = logoRow1.map((t) => (
    <TechLogo
      key={t.name}
      name={t.name}
      url={t.image}
      style={t.style}
      maxWidth={t.maxWidth}
      maxHeight={t.maxHeight}
    />
  ))
  const renderLogoRow2 = logoRow2.map((t) => (
    <TechLogo
      key={t.name}
      url={t.image}
      style={t.style}
      maxWidth={t.maxWidth}
      maxHeight={t.maxHeight}
    />
  ))

  return (
    <div>
      <div className={styles.logoRow1}>
        {renderLogoRow1}
      </div>
      <div className={styles.logoRow2}>
        {renderLogoRow2}
      </div>
    </div>
  )
}

export default TechLogos;

// TechLogo

import React from 'react';
import classNames from 'classnames'
import styles from './style.css';
import Responsive from 'react-responsive'
import { breakPoints } from '../../../TopBar/topbar.config'

const TechLogo = (props) => {
  const NarrowWidth = ({ children }) => <Responsive maxWidth={breakPoints.narrowWidthMax} children={children} />
  const MediumWidth = ({ children }) => <Responsive minWidth={breakPoints.mediumWidthMin} maxWidth={breakPoints.mediumWidthMax} children={children} />
  const WideWidth = ({ children }) => <Responsive minWidth={breakPoints.wideWidthMin} children={children} />
  const imageStyle = classNames(
    {
      [props.style]: true, // wideImage or expressImage
      [styles.logoHeight]: true, // sets max-height
    }
  )
  const techLogoWide = classNames({
    margin: '10px 12px 10px 12px',
    textAlign: 'canter',
  })
  const techLogoMedium = classNames({
    margin: '10px 1000px 5px 100px',
    textAlign: 'canter',
    backgroundColor: 'orange',
  })
  const techLogoNarrow = classNames({
    margin: '10px 10px 5px 10px',
    textAlign: 'canter',
  })
  return (
    <div className={styles.techLogo}>
      <img className={imageStyle} src={props.url} alt="logo" />
      <div className={styles.logoText}>{props.name}</div>
    </div>

  );
};

export default TechLogo;

// SectionTitle
import React from 'react'
import styles from './style.css'
import classNames from 'classnames';

const SectionTitle = (props) => {
  const titleStyles = classNames({
    'greenText': props.colorName === 'green',
    [styles.title]: true,
  })

  return (
    <h2 className={titleStyles}>{props.children}</h2>
  )
}

export default SectionTitle

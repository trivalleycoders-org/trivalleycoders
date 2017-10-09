// SectionSubTitle
import React from 'react'
import styles from './style.css'

const SectionTitle = (props) => {

  return (
    <h3 className={styles.title}>{props.children}</h3>
  )
}

export default SectionTitle

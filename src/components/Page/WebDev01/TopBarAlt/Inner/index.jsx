import React from 'react'
import styles from './style.css'

const Inner = (props) => {

  return (
    <div className={styles.wrapper} id={props.id}>
      {props.children}
    </div>

  )
}

export default Inner

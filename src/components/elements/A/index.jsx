import React from 'react'
import styles from './style.css'
import { greenText } from '../../../lib/colors'
// import classNames from 'classnames'

const A = (props) => {
  const aStyles = {
    color: props.fontColor === 'green' ? greenText : ''
  }
  return (
    <a href={props.href} className={styles.a} style={aStyles}>{props.children}</a>
  )
}

export default A

import React from 'react'
import styles from './style.css'
// import classNames from 'classnames'
/*
    props
    > textAlign:
 */
const P = (props) => {
  // const pStyles = classNames({
  //   'text-align': props.textAlign,
  //
  // })
  const pStyles = {
    fontFamily: "'Roboto', sans-serif !important",
    textAlign: 'justify',
  }
  return (
    <p style={pStyles}>{props.children}</p>
  )
}

export default P

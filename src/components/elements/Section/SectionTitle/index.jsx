// SectionTitle
import React from 'react'
import styles from './style.css'
import classNames from 'classnames';

const SectionTitle = (props) => {
  const styles = {
    color: props.fontColor === 'green' ? '#34E97C' : '',
    fontFamily: "'Lato', sans-serif",
    margin: 0,
    padding: 0,
    textAlign: 'center',
  }
  
  return (
    <h2 style={styles}>{props.children}</h2>
  )
}

export default SectionTitle

import React from 'react'
import styles from './style.css'
import classNames from 'classnames'

const SectionWrapper = (props) => {
  const wrapperStyles = classNames({
    [styles.wrapper]: true,
    [styles.greenBackground]: props.greenBackground,
  })
  return (
    <div className={wrapperStyles} id={props.id}>
      {props.children}
    </div>
  )
}

export default SectionWrapper

import React from 'react'
import styles from './style.css'
import classNames from 'classnames'

const Button = (props) => {
  const btnStyle = classNames({
    [styles.btn]: true,
    [styles.btnDefault]: props.default,
    [styles.btnGreen]: props.green,
    [styles.btnBlue]: props.blue,
    [styles.btnAmber]: props.amber,
    [styles.btnRed]: props.red,
  })

  const newChildren = props.children.map((c, index) => {
    const childStyle = classNames({
      [styles.childMargin]: index > 0,
      [styles.buttonText]: typeof c === 'string',
    })
    return (
      <span
        className={childStyle} key={index}
      >
        {c}
      </span>
    )
  })
  return (
    <button className={btnStyle}><div className={styles.childWrapper}>{newChildren}</div></button>
  )
}

export default Button

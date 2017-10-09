// TopBarDesktop
import React from 'react'
import styles from './style.css'
import classNames from 'classnames'

const TopBarDesktop = (props) => {
  
  const renderMenuItems = props.menuItems.map((m) => (
    <a href={m.href} key={m.label} className={styles.menuItem}>{m.label}</a>
      ))

  return (
    <div id='desktop-1' className={styles.wrapper}>
      <div id='desktop-2' className={styles.topBar}>
        <div id='desktop-3' className={styles.brandingDesktop}>
          <span className={styles.wordTrivalleyDesktop}>TriValley</span>
          &nbsp;
          <span className={styles.wordCodersDesktop}>coders</span></div>
        <div id='desktop-4' className={styles.desktopMenuItems}>
          {renderMenuItems}
        </div>
      </div>
    </div>
  )
}

export default TopBarDesktop

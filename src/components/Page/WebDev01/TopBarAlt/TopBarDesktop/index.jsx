// TopBarDesktop
import React from 'react'
import styles from './style.css'
import Inner from '../Inner'

const TopBarDesktop = (props) => {

  const renderMenuItems = props.menuItems.map((m) => (
    <a href={m.href} key={m.label} className={styles.menuItem}>{m.label}</a>
      ))

  return (
    <Inner id='wrapper-inner'>
      <div id='top-bar' className={styles.topBar}>
        <div id='branding-desktop' className={styles.brandingDesktop}>
          <a href='http://trivalleycoders.com'>
            <span className={styles.wordTrivalleyDesktop}>TriValley</span>
            &nbsp;
            <span className={styles.wordCodersDesktop}>coders</span>
          </a>
        </div>
        <div id='desktop-menu-items' className={styles.desktopMenuItems}>
          {renderMenuItems}
        </div>
      </div>
    </Inner>
  )
}

export default TopBarDesktop

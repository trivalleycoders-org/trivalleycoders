// TopBarPhone
import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './style.css'
import Inner from '../Inner'

class TopBarPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false,
    }
  }

  render() {

    const mobileMenuStyle = classNames({
      [styles.hideMobileMenu]: !this.state.showMobileMenu,
      [styles.showMobileMenu]: this.state.showMobileMenu,
    })

    const renderMenuStyles = classNames({
      [styles.menuItem]: true,
      [styles.phoneMenuItem]: true,
    })

    const hamburgerStyles = classNames({
      'glyphicon': true,
      'glyphicon-menu-hamburger': true,
      [styles.hamburger]: true,

    })
    const handleHamburgerClick = () => {
      let val;
      this.state.showMobileMenu
        ? val = false
        : val = true
      this.setState({ showMobileMenu: val })
    }

    const renderMenuItems = this.props.menuItems.map((m) => (
      <a href={m.href} key={m.label} className={renderMenuStyles}>{m.label}</a>
    ))

    return (
      // so .wrapper should be a column with 2 rows
      // row 1: brand and hamburger (flex-flow: row)
      // row 2: the menu buttons (flex-flow: column)
      <Inner id='wrapper-inner'>
        <div id='phone-2' className={styles.topBar}>
          <div id='phone-3' className={styles.brandingPhone}>
            <span className={styles.wordTrivalleyPhone}>TriValley</span>
            &nbsp;
            <span className={styles.wordCodersPhone}>coders</span>
          </div>
          <div id='phone-4' className={styles.hamburgerDiv} onClick={() => handleHamburgerClick()}>
            <span id='phone-5' className={hamburgerStyles} aria-hidden="true">
            </span>
          </div>
        </div>

        <div id='phone-6' className={mobileMenuStyle}>
          {renderMenuItems}
        </div>
      </Inner>

    )
  }
}

export default TopBarPhone

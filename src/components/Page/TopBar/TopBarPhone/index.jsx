// TopBarPhone
import React, { Component } from 'react'
import classNames from 'classnames'

class TopBarPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false,
    }
  }

  render() {

    const { brandName, brandColor, brandSizePhone, logo } = this.props.brand
    // const { menuItems } = this.props.menuItems
    const mobileMenu = classNames({
      'hide-mobile-menu': !this.state.showMobileMenu,
      'show-mobile-menu': this.state.showMobileMenu,
    })

    const handleHamburgerClick = () => {
      let val;
      this.state.showMobileMenu
        ? val = false
        : val = true
      this.setState({ showMobileMenu: val })
    }

    const renderMenuItems = this.props.menuItems.map((m) => (
      <a href={m.href} key={m.label} className='menu-item phone-menu-item'>{m.label}</a>
    ))

    const configStyles = {
      color: brandColor,
      // fontSize: brandSizePhone,
    }

    return (
      <div>
        <div className='top-bar'>
          <div className='branding-phone'>
            <img className='tvc-logo img-responsive' src={logo} alt='tvc-logo' />
            <div className='brand brand-phone' style={configStyles}>{brandName}</div>
          </div>
          <div className='mobile-menu-div' onClick={() => handleHamburgerClick()}>
            <div className="glyphicon glyphicon-menu-hamburger hamburger" aria-hidden="true">
            </div>
          </div>
        </div>
        <div className={mobileMenu}>
          {renderMenuItems}
        </div>
      </div>

    )
  }
}

export default TopBarPhone

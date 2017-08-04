// Navigation
import React from 'react'
import {Component} from 'react'
import classNames from 'classnames'
import './style.css'

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuDown: false
    }
  }

  render() {

    let menuState = classNames({
      menu: true,
      'menu-down': this.state.menuDown,
      'menu-up': !this.state.menuDown,
      'menu-item-down': this.state.menuDown,
      'menu-item-up': !this.state.menuDown,
      'hamburger': true,
      'nav': true,
      'nav-pills': true
    })

    const handleToggleBarClick = () => {
      let val;
      this.state.menuDown
        ? val = false
        : val = true
      this.setState({menuDown: val})
    }

    return (

      <div className='nav-container'>
        <div className='tvc-menu'>
          <ul className={menuState}>
            <li>
              <a href="#tech-logos" className="menu-item">Learn</a>
            </li>
            <li>
              <a href="#events" className="menu-item">Events</a>
            </li>
            <li>
              <a href="#members" className="menu-item">Members</a>
            </li>
            <li>
              <a href="#sponsors" className="menu-item">Sponsors</a>
            </li>
          </ul>
        </div>
        <span className='toggle-bar' onClick={() => handleToggleBarClick()}>
          &#9776;
        </span>
      </div>

    )
  }
};

export default Navigation;
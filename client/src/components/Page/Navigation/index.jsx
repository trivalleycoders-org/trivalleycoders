// Navigation
import React from 'react';
import { Component } from 'react';
import classNames from 'classnames'
import './style.css';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuDown: false,
    }
  }

  render() {

    let menuState = classNames(
      {
        menu: true,
        'menu-down': this.state.menuDown,
        'menu-up': !this.state.menuDown,
        'menu-item-down': this.state.menuDown,
        'menu-item-up': !this.state.menuDown,
      }
    )

    let toggleBarState = classNames(
      {
        'toggle-bar': true,
      }
    )

    const handleToggleBarClick = () => {
      let val;
      this.state.menuDown
        ? val = false
        : val = true
      this.setState({menuDown: val})
    }

    return (
        <nav id='nav' className='black-background'>
          <ul className={menuState}>
            <li><a href="#home" className="menu-item">Home</a></li>
            <li><a href="#learn" className="menu-item">Learn</a></li>
            <li><a href="#events" className="menu-item">Events</a></li>
            <li><a href="#projects" className="menu-item">Projects</a></li>
            <li><a href="#members" className="menu-item">Members</a></li>
            <li><a href="#sponsors" className="menu-item">Sponsors</a></li>
          </ul>
          <span
            className={toggleBarState}
            onClick={() => handleToggleBarClick()}
          >
            &#9776;
          </span>
        </nav>
    )
  }
};

export default Navigation;

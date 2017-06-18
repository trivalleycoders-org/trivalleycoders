// Navigation
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames'
import * as actionCreators from '../../../store/actions'
import * as selectors from '../../../store/selectors'
import { Grid, Row } from 'react-bootstrap'
import './style.css';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuDown: false,
    }
  }

  componentWillMount() {
    this.props.requestReadNavButtons();
  }

  render() {

    let menuState = classNames(
      {
      menu: true,
      'menu-down': this.state.menuDown,
      'menu-up': !this.state.menuDown,
      'menu-item-down': this.state.menuDown,
      'menu-item-up': !this.state.menuDown,
    })

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

    const { readNavButtonsRequest } = this.props;
    switch (readNavButtonsRequest.status){
      case 'success':
        return (
            <nav id='nav'>
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
      case 'failure':
       return (
          <div id='navButtons'>
            <h2>Attempt to load navButtons failed</h2>
          </div>
        );
      default:
        return (
          <div id='navButtons'>
            <h2>Loading data...</h2>
          </div>
        );
    }
  }
};

Navigation.propTypes = {
  requestReadNavButtons: PropTypes.func.isRequired,
  readNavButtonsRequest: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  readNavButtonsRequest: selectors.getRequest(state, 'readNavButtons'),
  navButtons: selectors.getNavButtons(state),
});

export default connect(mapStateToProps, actionCreators)(Navigation);

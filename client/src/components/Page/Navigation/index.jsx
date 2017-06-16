// Navigation
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames'
import * as actionCreators from '../../../store/actions'
import * as selectors from '../../../store/selectors'
// import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import './style.css';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    }
  }
  componentWillMount() {
    this.props.requestReadNavButtons();
  }

  render() {

    let cx = classNames({
      topnav: true,
      responsive: this.state.showMenu
    })

    const handleIconClick = () => {
      let val;
      this.state.showMenu
        ? val = false
        : val = true
      this.setState({showMenu: val})
    }
    const { readNavButtonsRequest } = this.props;
    switch (readNavButtonsRequest.status){
      case 'success':
        return (
          <div className={cx} id="myTopnav">
            <a href="#home">Home</a>
            <a href="#learn">Learn</a>
            <a href="#events">Events</a>
            <a href="#projects">Projects</a>
            <a href="#members">Members</a>
            <a href="#sponsors">Sponsors</a>
            <a
              className="icon"
              onClick={() => handleIconClick()}
            >&#9776;</a>
          </div>
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

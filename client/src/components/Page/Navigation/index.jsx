// Navigation
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions'
import * as selectors from '../../../store/selectors'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import * as style from './style.css';


class Navigation extends Component {
  componentWillMount() {
    this.props.requestReadNavButtons();
  }

  render() {
    const { readNavButtonsRequest } = this.props;
    switch (readNavButtonsRequest.status){
      case 'success':
        return (
          <nav>
            <Navbar id='navbar' inverse collapseOnSelect>
              <Navbar.Header id='navbar-header' class='navbar-header'>
                <Navbar.Brand id='navbar-brand' className='navbar-brand'>

                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse id='navbar-collapse'>
                <Nav id='nav-pullRight' pullRight>
                  <NavItem eventKey={1} href="#header">Home</NavItem>
                  <NavItem eventKey={2} href="#tech-logos">Learn</NavItem>
                  <NavItem eventKey={2} href="#events">Events</NavItem>
                  <NavItem eventKey={2} href="#projects">Projects</NavItem>
                  <NavItem eventKey={2} href="#members">Members</NavItem>
                  <NavItem eventKey={2} href="#sponsors">Sponsors</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
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

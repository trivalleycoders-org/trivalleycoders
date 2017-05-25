// Header
import React from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import * as style from './style.css';

// import Brand from './Brand';
import Logo from './Logo';
import SiteTitle from './SiteTitle'
import Navigation from './Navigation';

const Header = () => (
  <div id='nav-bar-outer' className='green-border'>
    <Grid id='nav-grid' class='nav-grid'>
      <Row id='nav-row'>
        <Navbar id='navbar' inverse collapseOnSelect>
          <Navbar.Header id='navbar-header'>
            <Navbar.Brand id='navbar-brand'>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse id='navbar-collapse'>
            <Nav id='nav'>
              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav id='nav-pullRight' pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Grid>
  </div>
);

export default Header;

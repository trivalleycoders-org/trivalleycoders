// Header
import React from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import * as style from './style.css';

// import Brand from './Brand';
import Logo from './Logo';
import SiteTitle from './SiteTitle'
import Navigation from './Navigation';

const Header = () => (
  <div id='nav-bar-outer' className='green-border header-colors'>
    <Grid id='nav-bar-grid' className='header-grid blue-border'>
      <Navbar id='nav-bar' className='navbar-xx' inverse fluid collapseOnSelect>
        <Row id='nav-bar-grid-row' className='header-row'>
          <Navbar.Header id='nav-bar-header'>
            <Navbar.Brand id='nav-bar-brand'>
            </Navbar.Brand>
            <Navbar.Toggle id='nav-bar-toggle'/>
          </Navbar.Header>
          <Col id='nav-bar-grid-col-1' className='header-col orange-border' md={1}>
            <Logo />
          </Col>
          <Col id='nav-bar-grid-col-2' className='header-col orange-border' md={5}>
            <SiteTitle />
          </Col>
          <Col  id='nav-bar-grid-col-3' className='header-col header-nav orange-border' md={6}>
            <Navbar.Collapse id='nav-bar-collapse'>
              <Nav id='nav-bar-nav'>
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
              <Nav pullRight>
                <NavItem eventKey={1} href="#">Link Right</NavItem>
                <NavItem eventKey={2} href="#">Link Right</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    </Grid>
  </div>
);

export default Header;

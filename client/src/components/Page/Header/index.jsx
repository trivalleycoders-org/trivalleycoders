// Header
import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import * as style from './style.css';

// import Brand from './Brand';
import Logo from './Logo';
import SiteTitle from './SiteTitle'
import Navigation from './Navigation';

const Header = () => (
      <div className='green-border'>
        <Grid className='header-grid blue-border'>
          <Row className='header-row'>
            <Col className='header-col orange-border' md={1}>
              <Logo />
            </Col>
            <Col className='header-col orange-border' md={5}>
              <SiteTitle />
            </Col>
            <Col className='header-col header-nav orange-border' md={6}>
              <Navigation />
            </Col>
          </Row>
        </Grid>
      </div>
);

export default Header;

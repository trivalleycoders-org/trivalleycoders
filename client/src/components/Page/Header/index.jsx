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

      <Grid>
        <Row className='header-row'>
          <Col md={1}>
            <Logo />
          </Col>
          <Col md={5}>
            <SiteTitle />
          </Col>
          <Col md={6}>
            <Navigation />
          </Col>
        </Row>
      </Grid>

);

export default Header;

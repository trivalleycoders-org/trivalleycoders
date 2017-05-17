// Header
import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import * as style from './style';
// import Brand from './Brand';
import Logo from './Logo';
import SiteTitle from './SiteTitle'
import Navigation from './Navigation';

const Header = () => (
  <div id='header' style={style.wrapper}>
    <Grid>
      <Row style={style.vAlign}>
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

  </div>
);

export default Header;

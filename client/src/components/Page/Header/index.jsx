// Header
import React from 'react';
import { Grid, Row} from 'react-bootstrap';

import './style.css';

// import Brand from './Brand';
import Logo from './Logo';
import SiteTitle from './SiteTitle'

const Header = () => (
  <header id='header' className='header'>
    <Grid className='outer-grid'>
      <Row className='main-row header-row'>
        <Logo />
        <SiteTitle />
        <h2 className='section-sub-title header-text'>Learn Build Grow Succeed</h2>
      </Row>
    </Grid>
  </header>
);

export default Header;

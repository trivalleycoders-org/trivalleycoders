// Header
import React from 'react';
import { Grid, Row, Button} from 'react-bootstrap';

import './style.css';

// import Brand from './Brand';
import Logo from './Logo';
import SiteTitle from './SiteTitle'

const Header = () => (
  <header>
    <Grid className='outer-grid'>
      <Row className='main-row header-row'>
        <Logo />
        <SiteTitle />
        <h2 className='section-sub-title'>Learn. Grow. Build. Succeed.</h2>
      </Row>
    </Grid>
  </header>
);

export default Header;

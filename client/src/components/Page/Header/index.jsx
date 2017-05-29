// Header
import React from 'react';
import { Grid, Row, Button} from 'react-bootstrap';

import * as style from './style.css';

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
        <h1 className='section-title'>A place to learn, collaborate and become a software developer</h1>
        <p>Tri-Valley Coders is a comfortable non-competitive place to learn about making software, both in person and online, for beginners and vetrans alike. Our members span the gammute in terms of age and experience, but they all have one thing in common, they are learning something new and looking to take their software development skills to the next level. (or: ... and preparing to take the next step in their career.)</p>
        <p>Tri-Valley Coders meets every Thursday from 9:00am to 12:00pm with frequent Saturday morning meetings as well. Click below to join.</p>
        <Button>Join Us!</Button>
      </Row>
    </Grid>
  </header>
);

export default Header;

import React from 'react';
import { Grid, Row } from 'react-bootstrap'
import * as style from './style.css';

const Footer = () => (
  <footer>
    <Grid className='outer-grid'>
      <Row className='main-row'>
        <p>Footer</p>
      </Row>
    </Grid>
  </footer>
);

export default Footer;

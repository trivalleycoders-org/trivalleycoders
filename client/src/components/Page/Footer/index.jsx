import React from 'react';
import { Grid, Row } from 'react-bootstrap'
import * as style from './style.css';

const Footer = () => (
  <div className='green-border'>
    <Grid className='footer-grid blue-border'>
      <Row>
        <p>Footer</p>
      </Row>
    </Grid>
  </div>
);

export default Footer;

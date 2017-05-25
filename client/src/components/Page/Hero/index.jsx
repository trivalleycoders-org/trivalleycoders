// Hero
import React from 'react';
import {
  Grid,
  Button,
  Row,
} from 'react-bootstrap';
import * as style from './style.css';

const Hero = () => (
  <div className='green-border'>
    <Grid className='hero-grid blue-border'>
      <Row>
        <h2>Learn. Grow. Build. Succeed.</h2>
        <h1>A place to learn, collaborate and become a software developer</h1>
        <p>Tri-Valley Coders is a comfortable non-competitive place to learn about making software, both in person and online, for beginners and vetrans alike. Our members span the gammute in terms of age and experience, but they all have one thing in common, they are learning something new and looking to take their software development skills to the next level. (or: ... and preparing to take the next step in their career.)</p>
        <p>Tri-Valley Coders meets every Thursday from 9:00am to 12:00pm with frequent Saturday morning meetings as well. Click below to join.</p>
        <Button>Join Us!</Button>
      </Row>
    </Grid>
  </div>
);

export default Hero;

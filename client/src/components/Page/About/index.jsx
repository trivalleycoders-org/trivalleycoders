// About
import React from 'react';
import { Grid, Row, Button} from 'react-bootstrap';

import './style.css';

const About = () => (
  <section id='about'>
    <Grid className='outer-grid'>
      <Row className='main-row'>
        <h1 className='section-title'>A place to learn, collaborate and<br />become a software developer</h1>
        <p className='lead'>Tri-Valley Coders is a comfortable non-competitive place to learn about making software, both in person and online, for beginners and vetrans alike. Our members span the gammute in terms of age and experience, but they all have one thing in common, they are learning something new and looking to take their software development skills to the next level. (or: ... and preparing to take the next step in their career.)</p>
        <p className='lead'>Tri-Valley Coders meets every Thursday from 9:00am to 12:00pm with frequent Saturday morning meetings as well. Click below to join.</p>
        <Button>Join Us!</Button>
      </Row>
    </Grid>
  </section>
)

export default About;

// About
import React from 'react';
import { Grid, Row, Button} from 'react-bootstrap';
import './style.css';
import iMeetup from './../../../images/meetup-swarm.svg'

const About = () => (
  <section id='about' className='section-about'>
    <Grid className='outer-grid'>
      <Row className='main-row'>
        <h1 className='section-title'>A place to learn, collaborate and<br />become a software developer</h1>
        <p className='lead'>Tri-Valley Coders is a comfortable non-competitive place to learn about making software, both in person and online. We cater to beginners and vetrans alike. Our members span the gammute in terms of age and experience, but they all have one thing in common, they are learning something new, taking their software development skills to the next level and getting ready for the next step in their career.</p>
        <p className='lead'>Tri-Valley Coders meets every Thursday from 9:00am to 12:00pm with emphasis on Web development and the MERN Stack. We also have periodic meetings focused on Python and Data Science. Check our schedule below for dates and times.</p>
        <Button className='join-us-button' bsStyle='success'> <img src={iMeetup} width={50} alt='meetup logo'/><span className='join-us-text'>Join Us via Meetup!</span></Button>
      </Row>
    </Grid>
  </section>
)

export default About;

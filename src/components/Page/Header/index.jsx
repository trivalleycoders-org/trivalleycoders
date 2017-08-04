// About
import React from 'react';
import './style.css';
import { Button } from 'react-bootstrap'
import iMeetup from './images/meetup-swarm.svg'

const Header = () => (
  <section id='about' className='black-background about-section'>
    <div className='section-container container-fluid about-container'>
      <div className='about-sub-container'>
        <h2 className='section-sub-title header-text'>Learn Build Grow Succeed</h2>
        <p>he</p>
        <p className='about-subtitle green-text'>A place to learn, collaborate and become a software developer</p>
        <p>Tri-Valley Coders is a place to learn the full gaumet of software development skills including: writing code, using developer tools and collaborating on projects. We offer the not just learning experiences but the opportunity to work on actual projects for real clients.</p>
        <p>We have a collaborative and supportive structure with roles for beginners as well as experienced devlopers to learn new skills. Both our members and organizers bring a wide variety of experience and skill levels.</p>
        <p>We meet every Thursday from 9:00am to 12:00pm with emphasis on Web development using JavaScript, HTML, CSS and the MERN Stack. We also have periodic meetings focused on Python and Data Science. Check our schedule below for dates and times.</p>
        <Button className='join-us-button' bsStyle='success'>
          <img className='join-meetup-logo' src={iMeetup} width={45} alt='meetup logo'/>
          <span className='join-us-text'>Join Us via Meetup!</span>
        </Button>
      </div>
    </div>
  </section>
)

export default Header;

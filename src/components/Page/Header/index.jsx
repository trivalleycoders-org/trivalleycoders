// About
import React from 'react';
import './style.css';
import { Button } from 'react-bootstrap'
import iMeetup from './images/meetup-swarm.svg'

const Header = () => (
  <section id='about' className='black-background about-section'>
    <div className='section-container header-body'>
      <h2 className='tagline'>Learn Build Grow Succeed</h2>
      <h4 className='subtagline green-text'>A place to learn, collaborate and become a software developer</h4>
Our Philosophy

Don't code alone
Self-study is an essential part of learning to make software but interacting with others is equally if not more important.
> Making software is a social activity. There is a long list of people a developer must interact with: other developers, QA, Project Management
> Mentorship
> Interacting with others
> Humans are social beings and learning is thereby a social activity
> When leaning in isolation you are isolated from the ideas and guidance of other people
> but learning in isolation often does not lead to success. 
> Giudance
> 
> other peoples ideas
> working together


It's making software, not coding
The phrase 'learning to code' and 'coding' is commonly used for the activity of makeing software, but don't be mistaken, creating software takes a lot more than coding and as a software developer you need to do much more than just code.



> Sugden
      <p>Tri-Valley Coders is a place to learn the full gaumet of software development skills including: writing code, using developer tools and collaborating on projects. We offer the not just learning experiences but the opportunity to work on actual projects for real clients.</p>
      <p>We have a collaborative and supportive structure with roles for beginners as well as experienced devlopers to learn new skills. Both our members and organizers bring a wide variety of experience and skill levels.</p>
      <p>We meet every Thursday from 9:00am to 12:00pm with emphasis on Web development using JavaScript, HTML, CSS and the MERN Stack. We also have periodic meetings focused on Python and Data Science. Check our schedule below for dates and times.</p>
      <Button className='join-us-button' bsStyle='success'>
        <img className='join-meetup-logo' src={iMeetup} width={45} alt='meetup logo'/>
        <span className='join-us-text'>Join Us via Meetup!</span>
      </Button>
    </div>
  </section>
)

export default Header;

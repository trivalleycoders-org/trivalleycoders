// Members
import React from 'react';
import { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import pChad from '../../../images/chad.jpg';
import pLaura from '../../../images/laura.jpeg';
import pMichael from '../../../images/michael.jpg';
import pNathan from '../../../images/nathan.jpg';
import pSharmina from '../../../images/sharmina.jpg';
import Member from './Member';
import './style.css';

class Members extends Component {
  render() {

    const arrMembers = [
      {
        id: '7a8a0c654b89f157524be1b68adf9dbecc4f1db0',
        picture: '',
        name: 'Karl',
        role: 'Web Developer & Organizer',
      },
      {
        id: 102,
        picture: pChad,
        name: 'Chad',
        role: 'Full-Stack Developer',
      },
      {
        id: 103,
        picture: pLaura,
        name: 'Laura',
        role: 'Web Developer',
      },
      {
        id: 104,
        picture: pMichael,
        name: 'Michael',
        role: 'Sr Web Developer'
      },
      {
        id: 105,
        picture: pNathan,
        name: 'En Zyme',
        role: 'Python & Data Science',
      },
      {
        id: 106,
        picture: pSharmina,
        name: 'Sharmina',
        role: 'Web Developer',
      },
    ]

    const members = arrMembers.map((m) => (
      <Member
        key={m.id}
        _id={m.id}
        picture={m.picture}
        name={m.name}
        role={m.role}
        index={m.index}
      />
    ))
    return (
      <section id='members'>
        <Grid className='outer-grid'>
          <Row className='main-row'>
            <h1 className='section-title'>Members</h1>
            <div className='members'>
              {members}
            </div>
          </Row>
        </Grid>
      </section>
    )

  }
}


export default Members;

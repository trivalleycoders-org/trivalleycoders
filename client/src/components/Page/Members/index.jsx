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
      <section id='members' className='green-background'>
        <div className='section-container container-fluid members-container'>
          <h1 className='section-title'>Members</h1>
          <div className='members'>
            {members}
          </div>
        </div>
      </section>
    )

  }
}


export default Members;

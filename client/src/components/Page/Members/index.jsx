// Members
import React from 'react';
import { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { members } from './member-data'
import Member from './Member';
import './style.css';

class Members extends Component {
  render() {
    console.log('members', members)

    const renderMembers = members.map((m) => (
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
        <div className='section-container'>
          <h1 className='section-title'>Members</h1>
          <div className='members'>
            {renderMembers}
          </div>
        </div>
      </section>
    )

  }
}


export default Members;

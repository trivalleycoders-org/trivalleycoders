// Members
import React from 'react';
import { Component } from 'react';
import { members } from './member-data'
import Member from './Member';
import styles from './style.css';
import SectionWrapper from '../../elements/SectionWrapper'
import Section from '../../elements/Section'

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
      <SectionWrapper>
        <Section title='Team'>
          <div className='wrapperMaxWidth820'>
            <div className={styles.members}>
              {renderMembers}
            </div>
          </div>
        </Section>
      </SectionWrapper>
    )

  }
}


export default Members;

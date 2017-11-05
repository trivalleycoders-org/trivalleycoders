// Header
import React from 'react';
import styles from './style.css';
import { Button } from 'react-bootstrap'
import iMeetup from './images/meetup-swarm.svg'
import SectionWrapper from '../../elements/SectionWrapper'
import Section from '../../elements/Section'
import TechLogos from './TechLogos'
import P from '../../elements/P'

const Header = () => {
  return (
    <SectionWrapper>
      <Section title='Learn to Make Software'>
        <P justify>Making software requires many skills, not just coding. At TriValley Coders, we teach teach the full set of skills you need to be a software developer using some of the latest, most popular technologies.</P>
        <TechLogos />
      </Section>
      <Section title='Community' subTitle={"Don't Code Alone"}>
        <P textAlign='justify'>We hold a free bi-weekly meeting where you can get help & advice for your effort to become a software devloper. These session are alternately organized as informal classes, team programming sessions and/or topic exploration.</P>
        <div className={styles.buttonContainer}>
          <Button bsStyle='success'>
            <img className={styles.joinMeetupLogo} src={iMeetup} width={45} alt='meetup logo'/>
            <span className={styles.joinUsText}>Join Us via Meetup!</span>
          </Button>
        </div>
      </Section>
    </SectionWrapper>
  )
}

export default Header;

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
      <Section title='A Community'>
        <P textAlign='justify'>TriValley Coders is a community of developers helping developers. We hold free bi-weekly meetings where beginner and experienced developers mix and learn together.</P>
        <div className={styles.buttonContainer}>
          <Button bsStyle='success'>
            <img className={styles.joinMeetupLogo} src={iMeetup} width={45} alt='meetup logo'/>
            <span className={styles.joinUsText}>Join Us via Meetup!</span>
          </Button>
        </div>
      </Section>
      <Section title='A School'>
        <P justify>We run periodic classes for those serious about learning to make software. Our couses cover HTML, CSS, JavaScript, React, Express, Node and MongoDB.</P>
        <TechLogos />
      </Section>
      <Section title='More than Coding - Make Software'>
        <P justify>'Learning to code' is a great catch-phrase but it doesn't accurately describe what employers are looking for. At TriValley Coders we cover project creating to deployment and everything in between.</P>
      </Section>

    </SectionWrapper>
  )
}

export default Header;

// Header
import React from 'react';
import styles from './style.css';
import iMeetup from './images/meetup-swarm.svg'
import SectionWrapper from '../../elements/SectionWrapper'
import Section from '../../elements/Section'
import TechLogos from './TechLogos'
import P from '../../elements/P'
import classNames from 'classnames'

const Header = () => {
  const btnStyle = classNames({
    [styles.btn]: true,
    [styles.btnSuccess]: true,
  })
  return (
    <SectionWrapper id='home'>
      <Section title='A Community'>
        <P textAlign='justify'>TriValley Coders is a community of developers helping developers. We hold free bi-weekly meetings where beginner and experienced developers mix and learn together.</P>
        <div className={styles.buttonContainer}>
          <a href='https://www.meetup.com/trivalleycoders/'>
            <button className={btnStyle}>
              <img className={styles.joinMeetupLogo} src={iMeetup} width={45} alt='meetup logo'/>
              <span className={styles.joinUsText}>Join Us via Meetup!</span>
            </button>
          </a>
        </div>
      </Section>
      <Section title='A School'>
        <P justify>We run periodic classes for those serious about learning to make software. Our couses cover HTML, CSS, JavaScript, React, Express, Node and MongoDB.</P>
        <div className={styles.techLogosWrapper}>
          <TechLogos />
        </div>
      </Section>
      <Section title='More than Coding - Making Software'>
        <P justify>'Learning to code' is a great catch-phrase but it doesn't accurately describe what employers are looking for. At TriValley Coders we cover project creation to deployment and everything in between.</P>
      </Section>

    </SectionWrapper>
  )
}

export default Header;

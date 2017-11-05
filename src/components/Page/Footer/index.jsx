import React from 'react';
import './style.css';
import SectionWrapper from '../../elements/SectionWrapper'
import Section from '../../elements/Section'
import P from '../../elements/P'
import A from '../../elements/A'
import classNames from 'classnames'
import styles from './style.css'

const Footer = () => {
  const gitHubStyle = classNames({
    'fa': true,
    'fa-github': true,
    'fa-2x': true,
    [styles.faIcon]: true,
  })
  const meetupStyle = classNames({
    'fa': true,
    'fa-meetup': true,
    'fa-2x': true,
    'fa-icon': true,
    [styles.faIcon]: true,
    [styles.meetup]: true,
  })
  const facebookStyle = classNames({
    'fa': true,
    'fa-github': true,
    'fa-2x': true,
    'fa-icon': true,
    [styles.faIcon]: true,
    [styles.facebook]: true,
  })
  return (
    <SectionWrapper>
      <Section>
        <div className={styles.faBtns}>
          <A href="https://github.com/trivalleycoders-org">
            <i className={gitHubStyle} aria-hidden="true"></i>
          </A>
          <A href="https://www.meetup.com/trivalleycoders//">
            <i className={meetupStyle} aria-hidden="true"></i>
          </A>
          <A href="https://www.facebook.com/groups/free.code.camp.sanramon/">
            <i className={facebookStyle} aria-hidden="true"></i>
          </A>
        </div>
        <P>&copy; 2017 Tri-Valley Coders &trade;. All rights reserved.</P>
        <P><i>Don't code alone!</i> &trade;</P>
      </Section>
    </SectionWrapper>
  )
}

export default Footer;

import React from 'react'
import { H1, H2, H3, Li } from './../Outline'
import Section from './../Section'
import Sup from '../Sup'

const Projects = () => {
  return (
    <Section>
      <H1>Projects</H1>
      <Li>Project 1: Access Elements Using getElementById()</Li>
      <Li>Project 2: Click Events</Li>
      <Li>Project 3: Conditional Logic - Toggle Light Bulb</Li>
      <Li>Project 4: Conditional Logic - Program a Stoplight</Li>
      <Li>Project 5: Multiple Events - Moving Images<Sup>(1)</Sup></Li>
    </Section>
  )
}
export default Projects

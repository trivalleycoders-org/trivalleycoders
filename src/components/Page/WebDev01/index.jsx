import React from 'react'
import TopBar from './TopBarAlt'
// simport styles from './style.css'
import { H1, H2, H3, Li } from './Outline'
import Section from './Section'
import SectionWrapper from '../../elements/SectionWrapper'
import InnerSection from '../../elements/Section'
import HTML from './HTML'
import About from './About'
import DocumentStructure from './DocumentStructure'
import HTMLCSSJSOverview from './HTMLCSSJSOverview'
import ComputerSkills from './ComputerSkills'
import CSS from './CSS'
import JavaScript from './JavaScript'
import Projects from './Projects'
import DOM from './DOM'

const WebDev01 = () => {
  return (
    <SectionWrapper className='container'>
    <TopBar />
    <InnerSection>
    <h1>Beginning Web Development</h1>
    <About />
    <DocumentStructure />
    <HTMLCSSJSOverview />
    <ComputerSkills />
    <HTML />
    <CSS />
    <DOM />
    <JavaScript />
    <Projects />









    <div>
      <H2>Future</H2>
      <ul>
        <Li>
          <Li>Inspecting pages</Li>
          <Li>Using the web browsers console</Li>
        </Li>
      </ul>
    </div>
    </InnerSection>
    </SectionWrapper>
  )
}
export default WebDev01

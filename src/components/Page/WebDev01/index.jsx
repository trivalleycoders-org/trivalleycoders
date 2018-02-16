import React from 'react'
import TopBar from './TopBarAlt'
// simport styles from './style.css'
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
  const pageTitleStyle = {
    textAlign: 'center',
    margin: '100px 0 15px 0',
  }
  return (
    <SectionWrapper className='container'>
      <TopBar />
      <h1 style={pageTitleStyle}>Beginning Web Development</h1>
      <InnerSection>
        <About />
        <DocumentStructure />
        <HTMLCSSJSOverview />
        <ComputerSkills />
        <HTML />
        <CSS />
        <DOM />
        <JavaScript />
        <Projects />
      </InnerSection>
    </SectionWrapper>
  )
}
export default WebDev01

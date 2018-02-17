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
import Footnotes from './Footnotes'
import PageTitle from './PageTitle'

const WebDev01 = () => {
  
  return (
    <div>
    <SectionWrapper>
      <TopBar />
    </SectionWrapper>
    <SectionWrapper className='container' whiteBackground>

      <PageTitle>Beginning Web Development</PageTitle>
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
        <Footnotes />
      </InnerSection>
    </SectionWrapper>
    </div>
  )
}
export default WebDev01

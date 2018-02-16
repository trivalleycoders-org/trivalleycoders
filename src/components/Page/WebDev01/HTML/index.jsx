import React from 'react'
import { H1, H2, H3, Li } from './../Outline'
import Section from './../Section'

const HTML = () => {
  return (
    <Section>
      <H1>HTML</H1>
      <Section l2>
        <H2>Anatomy of a HTML Element</H2>
          <Li>Elements are made of tags</Li>
          <Li>Elements are containers</Li>
          <Li>The importance of indenting</Li>
          <Li>Name / value pairs</Li>
          <Li>Attributes</Li>
          <Li>Essential HTML Elements</Li>
          <Li>Exercise 2 - Creating a HTML Page</Li>
      </Section>
    </Section>
  )
}
export default HTML

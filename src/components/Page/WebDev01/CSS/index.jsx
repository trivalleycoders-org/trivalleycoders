import React from 'react'
import { H1, H2, H3, Li } from './../Outline'
import Section from './../Section'

const CSS = () => {
  return (
    <Section>
      <H1>CSS</H1>
      <Section l2>
        <H2>Anatomy of a Style</H2>
        <Li>Key value pairs again</Li>
        <Li>CSS Syntax</Li>
        <H2>Intro to Selectors</H2>
          <Li l2>Element Selectors</Li>
          <Li l2>ID Selectors</Li>
          <Li l2>Class Selectors</Li>
        <H2>CSS Exercises</H2>
        <Li>Exercise 3 - Creating Styles</Li>
        <Li>Exercise 4 - Modifying Built-in Styles</Li>
        <H2>Advanced CSS Concepts</H2>
        <Li>Understanding Cascading &amp; Inheritance</Li>
        <Li>Exercise 5 - Exploring Cascading &amp; Inheritance</Li>
      </Section>
    </Section>
  )
}
export default CSS

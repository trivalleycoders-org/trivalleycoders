import React from 'react'
import { H1, H2, H3, Li } from './../Outline'
import Section from './../Section'

const CSS = () => {
  return (
    <Section>
      <H1>CSS</H1>
        <H2>Anatomy of a Style</H2>
        <Li>Key value pairs again</Li>
        <Li>CSS Syntax</Li>
        <H2>Intro to Selectors</H2>
        <Li>Element Selectors</Li>
        <Li>ID Selectors</Li>
        <Li>Class Selectors</Li>
        <H2>CSS Exercises</H2>
        <Li><b>Exercise:</b> Creating Styles</Li>
        <Li><b>Exercise:</b> Modifying Built-in Styles</Li>
        <H2>Advanced CSS Concepts</H2>
        <Li>Understanding Cascading &amp; Inheritance</Li>
        <Li><b>Exercise:</b> Exploring Cascading &amp; Inheritance</Li>
    </Section>
  )
}
export default CSS

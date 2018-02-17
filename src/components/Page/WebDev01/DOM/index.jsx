import React from 'react'
import { H1, H2, H3, Li } from './../Outline'
import Section from './../Section'

const DOM = () => {
  return (
    <Section>
      <H1>Exploring the DOM</H1>

      <H2>The Document Object Model</H2>
      <Li>What's an object?</Li>
      <Li>What is the DOM</Li>
      <Li>How is the DOM Created</Li>
      <Li>Inspecting the DOM</Li>

      <H2>Box Model</H2>
      <Li>What is the box model?</Li>
      <Li>Exploring the box model - an interactive example</Li>
      <hr/>
      <p>Design an exercise that demonstrates this in the browser. This project is a start: https://github.com/klequis/lessons.older/tree/master/box-layout</p>
      <p>Maybe a js project where you change numbers on page and the margin, border, padding and stuff changes.</p>
      <hr/>
    </Section>
  )
}
export default DOM

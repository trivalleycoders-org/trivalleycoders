import React from 'react'
import { H1, H2, H3, Li } from './../Outline'
import Section from './../Section'

const DOM = () => {
  return (
    <Section>
      <H1>Exporing the DOM</H1>
      <H2>The Document Object Model</H2>
      <Li>What is the DOM</Li>
      <Li>How is the DOM Created</Li>
      <Li>Inspecting the DOM</Li>
      <H2>Box Model</H2>
      <Li>Design an exercise that demonstrates this in the browser. This project is a start: https://github.com/klequis/lessons.older/tree/master/box-layout</Li>
      <Li>Maybe a js project where you change numbers on page and the margin, border, padding and stuff changes.</Li>
    </Section>
  )
}
export default DOM

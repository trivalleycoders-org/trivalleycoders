import React from 'react'
import { H1, H2, H3, Li } from './../Outline'
import Section from './../Section'

const JavaScript = () => {
  return (
    <Section>
      <H1>JavaScript</H1>
      <Section l2>
        <H2>Data Types</H2>
        <Li>Strings</Li>
        <Li>Numbers</Li>
        <Li>Exercise X - Using Numbers &amp; Strings</Li>
      </Section>
      <Section l2>
        <H2>Variables</H2>
        <H3>What's a Variable</H3>
        <Li>Definition</Li>
        <Li>Creating Variables ('Declaring')</Li>
        <Li>Assignment</Li>
        <Li>Good &amp; Valid vs. Bad Variable Names</Li>
        <Li>Exercise X - Working With Variables</Li>
      </Section>
      <Section l2>
        <H2>Operators</H2>
        <Li>Arithmic Operators (+, -, etc.)</Li>
        <Li>Equality (===)</Li>
        <Li>Relational Operators (&gt;, &lt;, etc.)</Li>
        <Li>Arrays</Li>
        <Li>Exercise X - Working With Operators</Li>
      </Section>
      <Section l2>
        <H2>Functions</H2>
        <Li>What's a Function and Why Use Them</Li>
        <Li>Syntax of a Function</Li>
        <Li>Parameters</Li>
        <Li>Calling (i.e., using) Functions</Li>
      </Section>
      <Section l2>
      <H2>Controling Flow</H2>
      <Li>if, else & if else</Li>
      <Li>Exercise X - Using if</Li>
      <H2>Loops</H2>
      <Li>For Loops</Li>
      <Li>Exercise X - Writing For Loops</Li>
      <Li>While Loops</Li>
      <Li>Exercise X - Writing While Loops</Li>
      </Section>

      <H1>Events</H1>
      <H1>JavaScript is Asynchronous - What's Asynchronous?</H1>
    </Section>
  )
}
export default JavaScript

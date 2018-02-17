import React from 'react'
import { H1, H2, H3, Li } from './../Outline'
import Section from './../Section'

const JavaScript = () => {
  return (
    <Section>
      <H1>JavaScript</H1>
        <H2>Getting Ready</H2>
        <Li>Using the web browsers console</Li>

        <H2>Data Types</H2>
        <Li>Strings</Li>
        <Li>Numbers</Li>
        <Li><b>Exercise:</b> Using Numbers &amp; Strings</Li>

        <H2>Variables</H2>
        <H3>What's a Variable</H3>
        <Li>Definition</Li>
        <Li>Creating Variables ('Declaring')</Li>
        <Li>Assignment</Li>
        <Li>Good &amp; Valid vs. Bad Variable Names</Li>
        <Li><b>Exercise:</b> Working With Variables</Li>

        <H2>Operators</H2>
        <Li>Arithmetic Operators (+, -, etc.)</Li>
        <Li>Equality (===)</Li>
        <Li>Relational Operators (&gt;, &lt;, etc.)</Li>
        <Li>Arrays</Li>
        <Li><b>Exercise:</b> Working With Operators</Li>

        <H2>Functions</H2>
        <Li>What's a Function and Why Use Them</Li>
        <Li>Syntax of a Function</Li>
        <Li>Parameters</Li>
        <Li>Calling (i.e., using) Functions</Li>
        <Li><b>Exercise: Writing functions</b></Li>

      <H2>Controlling Flow</H2>
      <Li>if, else & if else</Li>
      <Li><b>Exercise:</b> Using if</Li>
      <H2>Loops</H2>
      <Li>For Loops</Li>
      <Li><b>Exercise:</b> Writing For Loops</Li>
      <Li>While Loops</Li>
      <Li><b>Exercise:</b> Writing While Loops</Li>

      <H2>Events</H2>
      <Li>What's an event?</Li>
      <Li><b>Exercise:</b> Creating events</Li>

      <H2>JavaScript is Asynchronous - What's Asynchronous?</H2>
      <Li>Demo, Discussion &amp; Examples</Li>
    </Section>
  )
}
export default JavaScript

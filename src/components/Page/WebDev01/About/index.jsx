import React from 'react'
import { H1, H2, H3, Li } from './../Outline'
import Section from './../Section'

export const About = () => {
  return (
    <Section>
      <H1>About</H1>
      <p>Learn programming concepts in the context of making real web applications - something like that.</p>
      <p>goals: 1) learn html, css, js, make web sites, 2) become a more sophisticated computer user, 3) problem solving</p>
      <p>I have been teaching web development to middle and high schoolers, inclusing my middle school son, for over a year and am amazed at what they can learn. The focus of this class, which may seem ambitious, is <b>real software development skills</b>.</p>
      <H2>Real Software Development Skills</H2>
      <p>There are many ways to learn to code but most focus on the details of the language or the logic of programming without constructing actual projects. While this is valuable is some ways I have found that children and adults who take this path can't create deployable software, can't write functions </p>
      <H2>Exposure to Concepts</H2>
      <H2>Logic &amp; Problem Solving</H2>
    </Section>
  )
}
export default About

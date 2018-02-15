import React from 'react'
import TopBar from './TopBarAlt'
// simport styles from './style.css'
import { H1, H2, H3, Li } from './Outline'
import Section from './Section'
// import H1 from './Outline/Heading1'

const WebDev01 = () => {
  return (
    <div className='container'>
      <TopBar />
      <h1>Beginning Web Development</h1>
      <Section>
        <H1>About</H1>

        <p>I have been teaching web development to middle and high schoolers, inclusing my middle school son, for over a year and am amazed at what they can learn. The focus of this class, which may seem ambitious, is <b>real software development skills</b>.</p>
        <H2>Real Software Development Skills</H2>
        <p>There are many ways to learn to code but most focus on the details of the language or the logic of programming without constructing actual projects. While this is valuable is some ways I have found that children and adults who take this path can't create deployable software, can't write functions </p>
        <H2>Exposure to Concepts</H2>
        <H2>Logic &amp; Problem Solving</H2>

      </Section>
      <Section>
        <H1>Document Structure</H1>
        <Li l1>A web page is a document</Li>
        <Li l1>What is an element</Li>
        <Li l1>What are styles and why use them</Li>
        <Li l1>The hierarchy of information: An exploration of document structure</Li>
      </Section>
      <Section>
        <H1>What is HTML, CSS & JavaScript</H1>
        <H2>A demo and discussion</H2>
        <Li>Defining Content</Li>
        <Li>So What's Structure</Li>
        <Li>HTML: Structure is created with HTML</Li>
        <Li>CSS: Styles are created with CSS</Li>
        <Li>JavaScript: Interactity is provide by JavaScript</Li>
        <H2>Exercise 1</H2>
        <Li>Writing HTML & CSS</Li>
      </Section>
      <Section>
        <H1>Computing Skills for Beginning Developers</H1>
        <Section l2>
          <H2>The File System</H2>
          <Li>What's a file system</Li>
          <Li>File managers</Li>
          <Li>File extensions</Li>
          <Li>Getting organized with files &amp; folders</Li>
        </Section>
        <Section l2>
          <H2>Demo: Installing Software</H2>
          <Li>Installing Atom Editor</Li>
        </Section>
        <Section l2>
          <H2>Creating a Project</H2>
          <Li>Create Folders & Files</Li>
          <Li>Opening a project with Atom</Li>
          <Li>Writing HTML &amp; CSS</Li>
          <Li>Linking HTML to CSS</Li>
        </Section>
      </Section>
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
        </Section>
        <Section l2>
          <H2>Exercise 2 - Creating a HTML Page</H2>
        </Section>
      </Section>
      <Section>
        <H1>CSS</H1>
        <Section l2>
          <H2>Anatomy of a Style</H2>
          <Li>Key value pairs again</Li>
          <Li>CSS Syntax</Li>
          <Li>Intro to Selectors</Li>
            <Li l2>Element Selectors</Li>
            <Li l2>ID Selectors</Li>
            <Li l2>Class Selectors</Li>
        </Section>
        <Section l2>
          <H2>Exercise 3 - Creating Styles</H2>
          <H2>Exercise 4 - Modifying Built-in Styles</H2>
        </Section>
        <Section l2>
          <H2>Cascading &amp; Inheritance</H2>
          <H2>Exercise 5 - Exploring Cascading &amp; Inheritance</H2>
        </Section>

      </Section>
      <Section>
        <H1>JavaScript</H1>
        <Section l2>
          <H2>Data Types</H2>
          <Li>Strings</Li>
          <Li>Numbers</Li>
          <H2>Exercise X - Using Numbers &amp; Strings</H2>
        </Section>
        <Section l2>
          <H2>Variables</H2>
          <H3>What's a Variable</H3>
          <Li>Definition</Li>
          <Li>Creating Variables ('Declaring')</Li>
          <Li>Assignment</Li>
          <Li>Good &amp; Valid vs. Bad Variable Names</Li>
          <H2>Exercise X - Working With Variables</H2>
        </Section>
        <Section l2>
          <H2>Operators</H2>
          <Li>Arithmic Operators (+, -, etc.)</Li>
          <Li>Equality (===)</Li>
          <Li>Relational Operators (&gt;, &lt;, etc.)</Li>
          <Li>Arrays</Li>
          <H2>Exercise X - Working With Operators</H2>
        </Section>
        <Section l2>
          <H2>Functions</H2>
          <Li>What's a Function and Why Use Them</Li>
          <Li>Syntax of a Function</Li>
          <Li>Parameters</Li>
          <Li>Calling (i.e., using) Functions</Li>
        </Section>
        <Section l2>
        <H2>Control Flow</H2>
        <Li>if, else & if else</Li>
        <H2>Exercise X - Using if</H2>
        </Section>
      </Section>










      <div>
        <H2>Future</H2>
        <ul>
          <Li>
            <Li>Inspecting pages</Li>
            <Li>Using the web browsers console</Li>
          </Li>
        </ul>
      </div>
    </div>
  )
}
export default WebDev01

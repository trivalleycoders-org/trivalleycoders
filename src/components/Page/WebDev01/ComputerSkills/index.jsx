import React from 'react'
import { H1, H2, H3, Li } from './../Outline'
import Section from './../Section'

const ComputerSkills = () => {
  return (
    <Section>
      <H1>Computing Skills for Beginning Developers</H1>

        <H2>The File System</H2>
        <Li>What's a file system</Li>
        <Li>File managers</Li>
        <Li>File extensions</Li>
        <Li>Getting organized with files &amp; folders</Li>
        <Li></Li>

        <H2>Demo: Installing Software</H2>
        <Li>Mac</Li>
        <Li>Windows</Li>
        <Li>Linux (what's that?)</Li>

        <H2>Follow Along: Creating a Project</H2>
        <Li>Create Folders & Files</Li>
        <Li>Opening a project with Atom</Li>
        <Li>Writing HTML &amp; CSS</Li>
        <Li>Linking HTML to CSS</Li>
    </Section>
  )
}
export default ComputerSkills

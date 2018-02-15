import React from 'react'
import Heading1 from './Heading1'
import Heading2 from './Heading2'
import Heading3 from './Heading3'
import ListItem from './ListItem'

export const H1 = ({ children }) => {
  return (
    <Heading1>{children}</Heading1>
  )
}

export const H2 = ({ children }) => {
  return (
    <Heading2>{children}</Heading2>
  )
}

export const H3 = ({ children }) => {
  return (
    <Heading3>{children}</Heading3>
  )
}

export const Li = ({ l1, l2, l3, l4, children }) => {
  return (
    <ListItem l1={l1} l2={l2} l3={l3} l4={l4}>{children}</ListItem>
  )
}

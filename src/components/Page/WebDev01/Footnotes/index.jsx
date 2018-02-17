import React from 'react'
import Section from './../Section'

const titleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
}
const liStyle = {
  fontSize: '14px',
}

const HTML = () => {
  return (
    <Section>
      <b>Notes</b>
      <ol>
        <li style={liStyle}>This is an advanced project. Some students may not be able to complete it.</li>
      </ol>

    </Section>
  )
}
export default HTML

import React from 'react'

const P = (props) => {
  const pStyles = {
    fontFamily: "'Roboto', sans-serif !important",
    textAlign: 'justify',
  }
  return (
    <p style={pStyles}>{props.children}</p>
  )
}

export default P

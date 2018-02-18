import React from 'react'

const h2Style = {
  fontSize: '20px',
  fontWeight: 'bold'
}

const H2 = ({ children }) => {

  return (
    <div style={h2Style}>{children}</div>
  )
}
export default H2

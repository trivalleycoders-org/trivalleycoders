import React from 'react'

const H2 = ({ children }) => {
  const h2Style = {
    fontSize: '18px',
  }
  return (
    <div style={h2Style}>{children}</div>
  )
}
export default H2

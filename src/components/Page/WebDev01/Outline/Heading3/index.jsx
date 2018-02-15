import React from 'react'

const H3 = ({ children }) => {
  const h3Style = {
    fontSize: '12px',
  }
  return (
    <div style={h3Style}>{children}</div>
  )
}
export default H3

import React from 'react'

const H3 = ({ children }) => {
  const h3Style = {
    fontSize: '16px',
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
  return (
    <div style={h3Style}>{children}</div>
  )
}
export default H3

import React from 'react'

const h3Style = {
  fontSize: '16px',
  fontWeight: 'bold',
  fontStyle: 'italic',
}

const H3 = ({ children }) => {

  return (
    <div style={h3Style}>{children}</div>
  )
}
export default H3

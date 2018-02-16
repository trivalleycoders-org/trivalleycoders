import React from 'react'

const H1 = ({ children }) => {
  // console.log('children', props)
  const h1Style = {
    fontSize: '26px',
    fontWeight: 'bold',
  }
  return (
    <div style={h1Style}>{children}</div>
  )
}
export default H1

import React from 'react'

const h1Style = {
  fontSize: '26px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '15px',
  marginTop: '5px',
  marginTop: '10px',
}

const H1 = ({ children }) => {
  // console.log('children', props)

  return (
    <div style={h1Style}>{children}</div>
  )
}
export default H1

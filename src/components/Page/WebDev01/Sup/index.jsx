import React from 'react'

const supStyle = {
  fontSize: '10px',
}

const Sup = ({ children }) => {
  return (
    <sup style={supStyle}> {children}</sup>
  )
}
export default Sup

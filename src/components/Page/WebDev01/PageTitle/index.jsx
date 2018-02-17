import React from 'react'

const titleStyle = {
  textAlign: 'center',
  textShadow: 'unset',
  padding: '100px 0 15px 0',
}

const PageTitle = ({ children }) => {
  return (
    <h1 style={titleStyle}>{children}</h1>
  )
}
export default PageTitle

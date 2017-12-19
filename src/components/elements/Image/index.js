import React from 'react'

const Image = ({ src, alt }) => {

  const imageStyles = {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  }
  return (
    <img src={src} style={imageStyles} alt={alt} />
  )
}
export default Image

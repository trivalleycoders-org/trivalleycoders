import React from 'react'

const Section = ({ l1, l2, l3, children }) => {
  const margin = () => {
    if (l2) {
      return '10px 0'
    } else if (l3) {
      return '5px 0'
    }
    return '20px 0'
  }
  const sectionStyle = {
      margin: margin()
  }


  return (
    <section style={sectionStyle}>{children}</section>
  )
}
export default Section

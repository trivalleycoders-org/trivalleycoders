import React from 'react'

const listItemStyle = {
  listStylePosition: 'inside',
}
const l1Style = {
  ...listItemStyle,
  listStyleType: 'square',
  marginLeft: '10px',
}
const l2Style = {
  ...listItemStyle,
  listStyleType: 'disc',
  marginLeft: '20px',
}
const l3Style = {
  ...listItemStyle,
  listStyleType: 'circle',
  marginLeft: '30px',
}
const l4Style = {
  ...listItemStyle,
  listStyleType: 'disclosure-closed',
  marginLeft: '40px',
}

const ListItem = ({ l1, l2, l3, l4, children }) => {
  // console.log('li props', props)
  // const solidSquare =

  if (l4) {
    return (
      <li style={l4Style}>{children}</li>

    )
  } else if (l2){
    return (
      <li style={l2Style}>{children}</li>
    )
  } else if (l3) {
    return (
      <li style={l3Style}>{children}</li>
    )
  } else { // return level 1
    return (
      <li style={l1Style}>{children}</li>
    )
  }

}
export default ListItem

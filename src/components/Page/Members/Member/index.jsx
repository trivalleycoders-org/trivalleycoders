// Member
import React from 'react';
import './style.css';
import Identicon from './../../Identicon'
// import * as ku from '../../../../lib/ke-utils'

const Member = (props) => {

  const getPicture = () => {
    if (!props.picture) {
      return <Identicon
        hash={props._id}
             />
    } else {
      return <img className='member-img' src={props.picture} alt='member' />
    }
  }
  return (
    <div className='member-item'>
      {getPicture()}
      <span className='member-name'>{props.name}</span>
      <span className='member-role'>{props.role}</span>
    </div>
  )
};

export default Member;

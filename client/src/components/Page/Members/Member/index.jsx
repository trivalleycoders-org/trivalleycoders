// Member
import React from 'react';
import * as style from './style.css';

const Member = (props) => (
  <div className='member'>
    <div>
      <img className='member-picture' src={props.picture} alt="member icon"/>
    </div>
    <div className='member-name'>
      {props.name}
    </div>
    <div>
      {props.role}
    </div>
  </div>
);

export default Member;

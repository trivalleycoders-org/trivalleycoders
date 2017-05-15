// Member
import React from 'react';
import * as style from './style';

const Member = (props) => (
  <div class='member' style={style.wrapper}>
    <div>
      <img style={style.picture} src={props.picture}/>
    </div>
    <div>
      {props.name}
    </div>
    <div>
      {props.role}
    </div>
  </div>
);

export default Member;

// Events
import React from 'react';
import * as style from './style';


const Event = (props) => (
  <div id='event' style={style.wrapper}>
    <div>
      {props.date}
    </div>
    <div>
      {props.name}
    </div>
    <div>
      {props.location}
    </div>
  </div>
);

export default Event;

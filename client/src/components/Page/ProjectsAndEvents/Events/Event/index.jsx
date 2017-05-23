// Events
import React from 'react';
import * as style from './style.css';


const Event = (props) => (
  <div id='event' style={style.wrapper}>
    <div style={style.date}>
      {props.date.substr(0,7)}
    </div>
    <div style={style.name}>
      <a href="#">{props.name}</a>

    </div>
    <div style={style.location}>
      {props.location}
    </div>
  </div>
);

export default Event;

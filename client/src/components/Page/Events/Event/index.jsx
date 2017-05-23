// Events
import React from 'react';
import * as style from './style.css';


const Event = (props) => (
  <tr>
    <td>
      {props.date.substr(0,7)}
    </td>
    <td>
      <a href="#">{props.name}</a>
    </td>
    <td>
      {props.location}
    </td>
  </tr>
);

export default Event;

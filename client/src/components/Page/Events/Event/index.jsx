// Events
import React from 'react';
import * as style from './style.css';


const Event = (props) => (
  <tr>
    <td>
      date
    </td>
    <td>
      <a href="#">{props.name}</a>
    </td>
    <td>
      location
    </td>
  </tr>
);

export default Event;


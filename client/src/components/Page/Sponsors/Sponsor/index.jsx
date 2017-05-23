// Sponsor
import React from 'react';
import * as style from './style.css';

const Sponsor = (props) => (
  <div>
    <img src={props.picture} responsive alt="sponsor icon"/>
    {props.name}
  </div>
);

export default Sponsor;

// Member
import React from 'react';
import { Panel, Image } from 'react-bootstrap'
import * as style from './style.css';

const Member = (props) => (
  <Panel className='panel-member'>
    <Image src={props.picture} responsive alt='member icon' />
    <h4>{props.name}</h4>
    <div>{props.role}</div>
  </Panel>
);

export default Member;

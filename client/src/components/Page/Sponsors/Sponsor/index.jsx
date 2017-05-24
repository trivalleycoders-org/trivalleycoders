// Sponsor
import React from 'react';
import { Panel, Image } from 'react-bootstrap'
import * as style from './style.css';

const Sponsor = (props) => (
  <Panel className='panel-sponsor'>
    <Image src={props.picture} responsive alt='member icon' />
    <h4>{props.name}</h4>
  </Panel>
);

export default Sponsor;

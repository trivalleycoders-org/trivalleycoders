// Member
import React from 'react';
import { Panel, Image } from 'react-bootstrap'
import * as style from './style.css';

const Member = (props) => (
  <Panel id='member-panel' className='panel-member blue-background'>
    {/* className='img-sizing' */}
    <div id='img-container' className='img-container red-background'>
      <Image src={props.picture} responsive alt='member icon' />
    </div>
    <h4 id='member-name' className='orange-background'>{props.name}</h4>
    <h5 id='member-role' className='orange-background'>{props.role}</h5>
  </Panel>
);

export default Member;

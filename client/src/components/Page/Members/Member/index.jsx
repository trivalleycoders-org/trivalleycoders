// Member
import React from 'react';
import { Panel, Image } from 'react-bootstrap'
import './style.css';

const Member = (props) => (
  <Panel id='panel-member' className='panel-member'>
    {/* className='img-sizing' */}
    <div id='member-img-container' className='member-img-container'>
      <Image src={props.picture} responsive alt='member picture' />
    </div>
    <h4 id='member-name' className=''>{props.name}</h4>
    <h5 id='member-role' className='member-role'>{props.role}</h5>
  </Panel>
);

export default Member;

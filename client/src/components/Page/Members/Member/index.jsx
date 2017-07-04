// Member
import React from 'react';
import { Panel, Image } from 'react-bootstrap'
import './style.css';
import Identicon from './../../Identicon'
// import * as ku from '../../../../lib/ke-utils'

const Member = (props) => {

  const getPicture = () => {
    if (!props.picture) {
      return <Identicon
        hash={props._id}
             />
    } else {
      return <Image src={props.picture} responsive alt='member picture' />
    }
  }
  return (
    <Panel id='panel-member' className='panel-member gray-panel'>
      <div id='member-img-container' className='member-img-container'>
        {getPicture()}
      </div>
      <h4 id='member-name'>{props.name}</h4>
      <h5 id='member-role' className='member-role'>{props.role}</h5>
    </Panel>
  )
};

export default Member;

// Member
import React from 'react';
import { Panel, Image } from 'react-bootstrap'
import './style.css';
import Identicon from 'identicon.js';
// import * as ku from '../../../../lib/ke-utils'

const Member = (props) => {

  const getPicture = () => {
    let src;
    if (!props.picture) {
      const id = props._id;
      // const data = new Identicon('d3b07384d113edec49eaa6238ad5ff00', 148).toString();
      const data = new Identicon(props._id, 148).toString();
      src = `data:image/png;base64,${data}`
    } else {
      src = props.picture;
    }
    const img = <Image src={src} responsive alt='member picture' />
    return img;
  }
  return (
    <Panel id='panel-member' className='panel-member'>
      {/* className='img-sizing' */}
      <div id='member-img-container' className='member-img-container'>
        {/* <Image src={props.picture} responsive alt='member picture' /> */}
        {getPicture()}
      </div>
      <h4 id='member-name' className=''>{props.name}</h4>
      <h5 id='member-role' className='member-role'>{props.role}</h5>
    </Panel>
  )
};

export default Member;

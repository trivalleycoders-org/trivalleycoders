// Member
import React from 'react';
import { Panel, Image } from 'react-bootstrap'
import './style.css';
import Identicon from './../../Identicon'
// import * as ku from '../../../../lib/ke-utils'

// const getRandomNumber = (min, max) => {
//   return parseInt(Math.random() * (max - min) + min);
// }
// const randomColorValue = () => {
//   const ret = getRandomNumber(100, 255)
//   ku.log('randomColorValue', ret, 'blue')
//   return ret
// }

// const generateIdenticon = (num) => {
//   // const data = new Identicon('d3b07384d113edec49eaa6238ad5ff00', 148).toString();
//   const options = {
//     foreground: [
//       randomColorValue(),
//       randomColorValue(),
//       randomColorValue(),
//       randomColorValue()
//     ], // rgba black
//     background: [255, 255, 255, 20], // rgba white
//     margin: 0.1, // 20% margin
//     size: 148, // 420px square
//     format: 'png', // use SVG instead of PNG
//   };
//   // const data = new Identicon(props._id, 148).toString();
//   const data = new Identicon(num, options).toString();
//   // const data = new Identicon('c157a79031e1c40f85931829bc5fc552', options).toString();
//   return `data:image/png;base64,${data}`
// }


const Member = (props) => {

  const getPicture = () => {
    // let src;
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

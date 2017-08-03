import React from 'react'
import IdenticonJs from 'identicon.js';
// import * as ku from '../../../lib/ke-utils'

const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (max - min) + min, 10);
}
const randomColorValue = (min=100, max=255) => {
  const ret = getRandomNumber(min, max)
  // ku.log('randomColorValue', ret, 'blue')
  return ret
}

const generateIdenticon = (hash) => {
  // const data = new Identicon('d3b07384d113edec49eaa6238ad5ff00', 148).toString();
  const options = {
    foreground: [
      randomColorValue(),
      randomColorValue(0, 100),
      randomColorValue(),
      randomColorValue()
    ], // rgba black
    background: [255, 255, 255, 20], // rgba white
    margin: 0.1, // 20% margin
    size: 148, // 420px square
    format: 'png', // use SVG instead of PNG
  };

  // const data = new Identicon(props._id, 148).toString();
  const data = new IdenticonJs(hash, options).toString();
  // const data = new Identicon('c157a79031e1c40f85931829bc5fc552', options).toString();
  const src = `data:image/png;base64,${data}`
  return <img
    className='member-img'
    src={src}
    alt='member'
         />
}

const Identicon = (props) => {
  return generateIdenticon(props.hash)
}

export default Identicon

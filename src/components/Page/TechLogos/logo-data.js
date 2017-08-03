// logo-data.js
import iHTML from './tech-logos/html-5.01.svg'
import iCSS from './tech-logos/css-3.01.svg'
import iJS from './tech-logos/javascript.svg'
import iMongo from './tech-logos/mongodb.svg'
import iExpress from './tech-logos/express.svg'
// import iExpress from './tech-logos/edit/express1.svg' // resized
import iReact from './tech-logos/react.svg'
import iNode from './tech-logos/nodejs.on-green.svg'

export const basicsLogos = [
  {
    name: 'HTML 5',
    image: iHTML,
    style: "small-image",
  },
  {
    name: 'CSS 3',
    image: iCSS,
    style: "small-image",
  },
  {
    name: 'JavaScript',
    image: iJS,
    style: "small-image",
  },
]

export const mernLogos = [
  {
    name: 'MongoDB',
    image: iMongo,
    style: 'wide-image',
  },
  {
    name: 'Express',
    image: iExpress,
    style: 'express-image',
  },
  {
    name: 'React',
    image: iReact,
    style: "small-image",
  },
  {
    name: 'Node',
    image: iNode,
    style: "small-image",
  },
]

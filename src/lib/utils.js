import React from 'react'
// import 'babel-polyfill'
import "core-js/modules/es7.string.pad-start";

const space = (num, text) => {
  // return <span>{new Array(num + 1).join(' ')}</span>
  let r = <span>{new Array(num + 1).join(' ') + text}</span>
  // return `" ".repeat(num) ${text}`
  // return '&nbsp;'.repeat(num)

  console.log('x' + r + 'x')
  return r
}

const eol = () => {
  return <br/>
}

const lCurly = () => {
    return '{'
}

const rCurly = () => {
  return '}'
}

export { space, eol, lCurly, rCurly}

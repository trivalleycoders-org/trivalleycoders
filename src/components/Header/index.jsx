import React from 'react';
import * as style from './style';
import Brand from '../Brand';
import Nav from '../Nav';

const Header = () => (
  <div id='header' style={style.wrapper}>
    <Brand />
    <Nav />
  </div>
);

export default Header;

import React from 'react';
import * as style from './style';

const Nav = () => (
  <nav id='nav' style={style.wrapper}>
    <button style={style.navBtn}>Home</button>
    <button style={style.navBtn}>Team</button>
    <button style={style.navBtn}>Projects</button>
    <button style={style.navBtn}>Learn</button>
    <button style={style.navBtn}>About</button>
  </nav>
);

export default Nav;

// Navigation
import React from 'react';
import * as style from './style';
import {
  Grid,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  Button
} from 'react-bootstrap';

const Navigation = () => {
  return (
    <div style={style.wrapper}>
      <Button style={style.navBtn}>Home</Button>
      <Button  style={style.navBtn}>Team</Button>
      <Button  style={style.navBtn}>Projects</Button>
      <Button  style={style.navBtn}>Learn</Button>
      <Button  style={style.navBtn}>About</Button>
    </div>
  )
};

export default Navigation;

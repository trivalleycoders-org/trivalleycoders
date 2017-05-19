// ButtonMenu
import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

const ButtonMenu = (props) => {
   let thecap = props.url
   ? <a href={props.url}>{props.caption}</a>
   : props.caption
   // let thecap = <a href="#">{props.caption}</a>




   return (
   <Button className="tvc-btn-default btn-nav success button">
      {thecap}
   </Button>
   )
};

export default ButtonMenu;

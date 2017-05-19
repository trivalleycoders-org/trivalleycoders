// ButtonMenu
import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

const ButtonMenu = (props) => (
  	<Button className="btn-nav success button hollow">
      {props.caption}
   </Button>
);

export default ButtonMenu;

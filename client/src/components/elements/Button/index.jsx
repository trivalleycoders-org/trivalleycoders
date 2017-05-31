// ButtonMenu
import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

const ButtonMenu = (props) => {


  return (
  	<Button className={classes(props.colorStatus)}>
      {props.caption}
    </Button>
  );
};

export default ButtonMenu;

function classes(colorStatus) {
  switch (colorStatus) {
    case 'success':
      return "btn-nav success button hollow";
    default:
      return "btn-nav"
  }

}

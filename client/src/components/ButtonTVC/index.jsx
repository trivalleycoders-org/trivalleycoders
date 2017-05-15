import React from 'react';
import * as style from './style';
import Logo from '../Logo';
import SiteTitle from '../SiteTitle';

const ButtonTVC = (props) => (
  <div className={props.styleName} style={style.wrapper}>
  	<button onClick={() => props.onClick()}>
	  	{props.icon 
	  		?<div>{props.icon}</div>
	  		: null
	  	}
	  	<div>{props.words}</div>
	</button>
  </div>
);

export default ButtonTVC;

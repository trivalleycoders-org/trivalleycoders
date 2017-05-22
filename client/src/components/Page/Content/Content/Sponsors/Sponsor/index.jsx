// Sponsor
import React from 'react';
import * as style from './style';

const Sponsor = (props) => (
  <div className='sponsor' style={style.wrapper}>
    <div>
      <img style={style.picture} src={props.picture} alt="sponsor icon"/>
    </div>
    <div style={style.name}>
      {props.name}
    </div>
  </div>
);

export default Sponsor;

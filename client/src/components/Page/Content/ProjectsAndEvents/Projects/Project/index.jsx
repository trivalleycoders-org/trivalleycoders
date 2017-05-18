// Project
import React from 'react';
import * as style from './style';


const Project = (props) => (
  <div id='project' style={style.wrapper}>
    <div style={style.projectName}>
      {props.projectName}
    </div>
    <div style={style.ownerName}>
      {props.ownerName}
    </div>
    <div style={style.projectType}>
      {props.projectType}
    </div>
    <div style={style.technologies}>
      {props.technologies}
    </div>
  </div>
);

export default Project;

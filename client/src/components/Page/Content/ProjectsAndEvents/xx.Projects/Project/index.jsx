// Project
import React from 'react';
import * as style from './style';

const Project = (props) => (
  <div id='project' style={style.wrapper}>
    <div>
      {props.projectName}
    </div>
    <div>
      {props.ownerName}
    </div>
    <div>
      {props.projectType}
    </div>
    <div style={style.techList}>
      {props.technologies}
    </div>
  </div>
);

export default Project;

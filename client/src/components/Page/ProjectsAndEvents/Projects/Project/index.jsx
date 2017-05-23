// Project
import React from 'react';
import * as style from './style.css';


const Project = (props) => (
  <tr>
    {props.projectName}
    {props.ownerName}
    {props.projectType}
    {props.technologies}
  </tr>
);

export default Project;

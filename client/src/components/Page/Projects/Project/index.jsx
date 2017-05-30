// Project
import React from 'react';
import { Panel } from 'react-bootstrap'
import './style.css';


const Project = (props) => (
  <Panel className='project-panel'>
    <div className='project-title'>{props.projectName}</div>
    <div>{props.ownerName}</div>
    <div>{props.projectType}</div>
    <div>{props.technologies}</div>
  </Panel>
);

export default Project;

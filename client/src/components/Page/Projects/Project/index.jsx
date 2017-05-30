// Project
import React from 'react';
import { Panel } from 'react-bootstrap'
import './style.css';


const Project = (props) => (
  <Panel id='panel-project' className='panel-project'>
    <h4 className='project-title'>{props.projectName}</h4>
    <h5 className='owner-name'>{props.ownerName}</h5>
    <h6>{props.projectType}</h6>
    <h6>{props.technologies}</h6>
  </Panel>
);

export default Project;

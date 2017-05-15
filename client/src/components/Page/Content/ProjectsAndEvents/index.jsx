// Projects and Events
import React from 'react';
import * as style from './style';
import Projects from './Projects';
import Events from './Events';

const ProjectsAndEvents = () => (
  <div id='page-and-events' style={style.wrapper}>
    <Events />
    <Projects />
  </div>
);

export default ProjectsAndEvents;

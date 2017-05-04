// MainContent
import React from 'react';
import * as style from './style';
import Intro from '../Intro';
import Learn from '../Learn';
import Projects from '../Projects';
import Events from '../Events';

const MainContent = () => (
  <div id='main-conent' style={style.wrapper}>
    <Intro />
    <Learn />
    <div id='projects-and-events' style={style.projectsAndEvents}>
      <Events />
      <Projects />
    </div>
  </div>
);

export default MainContent;

// MainContent
import React from 'react';
import * as style from './style';
import Intro from '../Intro';
import TechLogos from '../TechLogos';
import Projects from '../Projects';
import Events from '../Events';

const MainContent = () => (
  <div id='main-conent' style={style.wrapper}>
    <Intro />
    <TechLogos />
    <div id='projects-and-events' style={style.projectsAndEvents}>
      <Events />
      <Projects />
    </div>
  </div>
);

export default MainContent;

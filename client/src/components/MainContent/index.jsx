// MainContent
import React from 'react';
import * as style from './style';
import Intro from '../Intro';
import TechLogos from '../TechLogos';
import ProjectsAndEvents from '../ProjectsAndEvents';

const MainContent = () => (
  <div id='main-conent' style={style.wrapper}>
    <Intro />
    <TechLogos />
    <ProjectsAndEvents />

  </div>
);

export default MainContent;

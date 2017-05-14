// Content
import React from 'react';
import Hero from './Hero';
import TechLogos from './TechLogos';
import ProjectsAndEvents from './ProjectsAndEvents';
import Sponsors from './Sponsors';
import * as style from './style';

const Content = () => (
  <div id='content' style={style.wrapper}>
    <Hero />
    <TechLogos />
    <ProjectsAndEvents />
    <Sponsors />
  </div>
);

export default Content;

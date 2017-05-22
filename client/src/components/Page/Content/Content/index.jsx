// Content
import React from 'react';
import Hero from './Hero';
import TechLogos from './TechLogos';
import ProjectsAndEvents from './ProjectsAndEvents';
import Sponsors from './Sponsors';
import Members from './Members';
import * as style from './style.css';

const Content = () => (
  <div id='content' className='content-wrapper'>
    <Hero />
    <TechLogos />
    <ProjectsAndEvents />
    <Members />
    <Sponsors />
  </div>
);

export default Content;

// MainContent
import React from 'react';
import * as style from './style';
import Intro from '../Intro';
import Learn from '../Learn';
import TechCard from '../TechCard';

const MainContent = () => (
  <div id='main-conent' style={style.wrapper}>
    <Intro />
  </div>
);

export default MainContent;

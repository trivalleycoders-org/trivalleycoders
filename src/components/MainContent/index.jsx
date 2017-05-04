// MainContent
import React from 'react';
import * as style from './style';
import Intro from '../Intro';
import Learn from '../Learn';

const MainContent = () => (
  <div id='main-conent' style={style.wrapper}>
    <Intro />
    <Learn />
  </div>
);

export default MainContent;

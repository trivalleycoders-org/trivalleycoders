import React from 'react';
import * as style from './style';
import Sidebar from '../Sidebar';
import MainContent from '../MainContent';

const Content = () => (
  <div id='site-title' style={style.wrapper}>
    <MainContent />
    <Sidebar />
  </div>
);

export default Content;

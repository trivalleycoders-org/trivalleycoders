import React from 'react';
import * as style from './style';
import Logo from '../Logo';
import SiteTitle from '../SiteTitle';

const Brand = () => (
  <div id="brand" style={style.wrapper}>
    <Logo />
    <SiteTitle />
  </div>
);

export default Brand;

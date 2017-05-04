import React, { Component } from 'react';
// import logo from '../../logo.svg';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
// import * as mStyle from '../../master-style';
import * as style from './style.js';


class Page extends Component {
  render() {
    return (
      <div id='page' style={style.wrapper}>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Page;

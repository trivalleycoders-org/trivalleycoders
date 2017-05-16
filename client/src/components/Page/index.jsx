// Page
import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../store/selectors';
import * as actionCreators from '../../store/actions';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import * as style from './style.js';

const Page = () => {
  return (
    <div id='page' style={style.wrapper}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Page;

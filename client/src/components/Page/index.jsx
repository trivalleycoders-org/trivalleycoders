// Page
import React from 'react';
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

// Page
import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import * as style from './style.css';

const Page = () => {
  return (
    <Grid>
      <Header />
      <Content />
      <Footer />
    </Grid>
  )
}

export default Page;

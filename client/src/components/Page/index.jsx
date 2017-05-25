// Page
import React from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import Header from './Header';
import Hero from './Hero';
import TechLogos from './TechLogos';
import Events from './Events';
import Projects from './Projects';
import Members from './Members';
import Sponsors from './Sponsors';
import Footer from './Footer';
import * as style from './style.css';

const Page = () => {
  return (
    <Grid className='page-grid-outer red-border'>
      <Row className='page-grid-outer-row red-border'>
        <Grid>
          <Row>
            <Header />
            <Hero />
            <TechLogos />
            <Events />
            <Projects />
            <Members />
            <Sponsors />
            <Footer />
          </Row>
        </Grid>
      </Row>
    </Grid>
  )
}

export default Page;

// Page
import React from 'react';
import {
  Grid,
  Row,
} from 'react-bootstrap';
import Navigation from './Navigation'
import Header from './Header';
import TechLogos from './TechLogos';
import Events from './Events';
import Projects from './Projects';
import Members from './Members';
import Sponsors from './Sponsors';
import Footer from './Footer';
import './style.css';
import NewForm from './NewForm';

const Page = () => {
  return (
    <Grid className='page-grid-outer' fluid>
      <Row className='page-grid-outer-row'>
        <Grid fluid>
          <Row>
            <Navigation />
            <Header />
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

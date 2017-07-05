// Page
import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors';
import Navigation from './Navigation'
import Header from './Header';
import About from './About';
import TechLogos from './TechLogos';
import Events from './Events';
// import Projects from './Projects';
import Members from './Members';
import Sponsors from './Sponsors';
import Footer from './Footer';
import './style.css';
// import NewForm from './NewForm';
// import * as ku from '../../lib/ke-utils';

class Page extends Component {
  render () {
    return (
      <Grid id='page-grid-outer' className='page-grid-outer' fluid>
        <Row id='page-row-outer' className='page-row-outer'>
          <Grid id='page-grid-inner-fluid' fluid>
            <Row id='page-row-inner'>
              <div id="page-top" className='black-background'>
                <Navigation />
              </div>
              <div id='header-about' className='black-background'>
                <Header />
                <About />
              </div>

              <div id='page-learn' className='green-background'>
                <TechLogos />
              </div>
              <div id="page-events" className='black-background'>
                <Events />
              </div>
              {/* <Projects /> */}
              <div id='page-members' className='green-background'>
                <Members />
              </div>
              <div id='page-sponsors' className='black-background'>
                <Sponsors />
              </div>
              <div id='page-footer' className='gradient-black-background'>
                <Footer />
              </div>
            </Row>
          </Grid>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  let showManageMembers = selectors.getShowManageMembers(state);
  const o = {
    showManageMembers: showManageMembers
  }
   return o;
}
// export default Page;
export default connect(mapStateToProps, actionCreators)(Page);

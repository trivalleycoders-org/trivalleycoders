// Page
import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors';
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
// import * as ku from '../../lib/ke-utils';

class Page extends Component {
  render () {
    return (
      <Grid className='page-grid-outer' fluid>
        <Row className='page-grid-outer-row'>
          <Grid fluid>
            <Row>
              <Navigation />
              <NewForm />
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
}

const mapStateToProps = (state) => {
  let showManageMembers = selectors.getShowManageMembers(state);
  if (showManageMembers === null) {
    console.log('showManageMembers', 'is null');
  } else {
    console.log('showManageMembers', showManageMembers);
  }

  const o = {
    showManageMembers: showManageMembers
  }

   return o;
}
// export default Page;
export default connect(mapStateToProps, actionCreators)(Page);

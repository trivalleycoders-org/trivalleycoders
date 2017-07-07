// Page
import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors';
import Navigation from './Navigation'
import Header from './Header';
import About from './About'
import TechLogos from './TechLogos';
import Events from './Events';
// import Projects from './Projects';
import Members from './Members';
import Sponsors from './Sponsors';
import Footer from './Footer';
import './style.css';
import Product from './Product'
// import NewForm from './NewForm';
// import * as ku from '../../lib/ke-utils';

class Page extends Component {
  render () {
    return (
      <div className='page-wrapper'>
        <Navigation />
        <Product />
        <Header />
        <About />
        <TechLogos />
        <Events />
        <Members />
        <Sponsors />
        <Footer />
      </div>
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

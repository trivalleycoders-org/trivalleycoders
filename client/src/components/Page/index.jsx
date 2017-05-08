import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../store/selectors';
import * as actionCreators from '../../store/actions';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
// import * as mStyle from '../../master-style';
import * as style from './style.js';


class Page extends Component {
  componentWillMount() {
    this.props.requestReadEvents()
  }

  render() {
    const {readEventsRequest} = this.props;
    // console.log('status', readEventsRequest.status);
    switch (readEventsRequest.status) {
      case 'success':
        return (
          <div id='page' style={style.wrapper}>
            <Header />
            <Content />
            <Footer />
          </div>
        );
      case 'failure':
        return (
          <div id='page' style={style.wrapper}>
            <h2>Attempt to get events failed</h2>
          </div>
        );
      default:
    }

  }
}

const mapStateToProps = (state) => ({
  readEventsRequest: selectors.getRequest(state, 'readEvents'),
});

export default connect(mapStateToProps, actionCreators)(Page);

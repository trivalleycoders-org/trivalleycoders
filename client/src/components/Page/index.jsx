import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
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
    this.props.requestReadEvents();
    this.props.requestReadProjects();
  }

  render() {
    const { readEventsRequest, readProjectsRequest} = this.props;
    // console.log('status', readEventsRequest.status);
    switch (readEventsRequest.status || readProjectsRequest.status) {
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
        return (
          <div id='page' style={style.wrapper}>
            <h2>No data</h2>
          </div>
        )
    }

  }
}

Page.propTypes = {
  requestReadEvents: PropTypes.func.isRequired,
  readEventsRequest: PropTypes.object.isRequired,
  readProjectsRequest: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => {
  return {
    readEventsRequest: selectors.getRequest(state, 'readEvents'),
    readProjectsRequest: selectors.getRequest(state, 'readProjects'),
  }
};

export default connect(mapStateToProps, actionCreators)(Page);

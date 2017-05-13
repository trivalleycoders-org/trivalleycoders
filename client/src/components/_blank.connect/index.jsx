// Project
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors'
import * as style from './style';

// PROP here matches PROP on line #20
const NAME = ({ PROP }) => (
  /* If the component is reusable, i.e., will appear more than once
     on the page, remove the 'id' from the <div>
  */
  <div id='NAME' style={style.wrapper}>

  </div>
);

// Rename both PROP & SELECTOR
const mapStateToProps = (state) => ({
  PROP: selectors.SELECTOR(state),
});

// Rename NAME here
export default connect(mapStateToProps, actionCreators)(NAME);

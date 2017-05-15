// Events
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../../store/actions';
import * as selectors from '../../../../../store/selectors';
import Event from './Event';
import * as style from './style';

const Events = ({ events }) => (
  <div id='events' style={style.wrapper}>
    {events.map((e) => (
      <Event
        key={e._id}
        date={e.date}
        name={e.name}
        location={e.location}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  events: selectors.getEvents(state),
});

export default connect(mapStateToProps, actionCreators)(Events);

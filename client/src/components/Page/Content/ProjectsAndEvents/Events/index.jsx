// Events
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../../store/actions';
import * as selectors from '../../../../../store/selectors';
import Event from './Event';
import * as style from './style';
import * as ku from '../../../../../../../lib/ke-utils'

class Events extends Component {
  componentWillMount() {
    this.props.requestReadEvents();
  }

  render() {
    ku.log('Events.render()', '', 'red');
    const { readEventsRequest } = this.props;
    ku.log('readEventsRequest', readEventsRequest, 'red');
    switch (readEventsRequest.status) {
      case 'success':
        return (
          <div id='events' style={style.wrapper}>
            {this.props.events.map((e) => (
              <Event
                key={e._id}
                date={e.date}
                name={e.name}
                location={e.location}
              />
            ))}
          </div>
        )
      case 'failure':
        return (
          <div id='events' style={style.wrapper}>
            <h2>Attempt to get events failed</h2>
          </div>
        );
      default:
        return (
          <div id='events' style={style.wrapper}>
            <h2>Loading data...</h2>
          </div>
        );
    }
  }
}

Events.propTypes = {
  requestReadEvents: PropTypes.func.isRequired,
  readEventsRequest: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    readEventsRequest: selectors.getRequest(state, 'readEvents'),
    events: selectors.getEvents(state),
  }
};

export default connect(mapStateToProps, actionCreators)(Events);

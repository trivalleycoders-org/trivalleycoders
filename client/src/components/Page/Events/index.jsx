// Events
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import { Table, Grid, Row } from 'react-bootstrap';
import Event from './Event';
import * as style from './style.css';

class Events extends Component {
  componentWillMount() {
    this.props.requestReadEvents();
  }

  render() {
    const { readEventsRequest } = this.props;
    switch (readEventsRequest.status) {
      case 'success':
        return (
          <section id='events'>
            <Grid className='outer-grid'>
              <Row className='main-row'>
                <h1 className='section-title'>Events</h1>
                <Table responsive>
                  <tbody>
                    {
                      this.props.events.map((e) => (
                        <Event
                          key={e._id}
                          date={e.date}
                          name={e.name}
                          location={e.location}
                        />
                      )
                      )
                    }
                  </tbody>
                </Table>
              </Row>
            </Grid>
          </section>
        )

      case 'failure':
        return (
          <section id='events'>
            <Grid className='outer-grid'>
              <Row className='main-row'>
                <h2>Attempt to get events failed</h2>
              </Row>
            </Grid>
          </section>
        );
      default:
        return (
          <section id='events'>
            <Grid className='outer-grid'>
              <Row className='main-row'>
                <h2>Loading data...</h2>
              </Row>
            </Grid>
          </section>
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

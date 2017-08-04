// Events
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import Event from './Event';
import iMeetup from './images/meetup-swarm.svg'
import './style.css';
import iLaptopCoffee from './images/laptop-coffee.jpeg'
import { Image } from 'react-bootstrap'

let i = 1;

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
            <div className='section-container events-container'>

              <div className='events-body'>
                <div className='events-list'>
                  <h1 id='events-title' className='section-title green-text'>Events</h1>
                  {
                    this.props.events.map((e) => (
                      <Event
                        key={e.time}
                        date={e.time}
                        name={e.name}
                        locationName={`${e.venue.name}`}
                        locationAddress={`${e.venue.address_1}`}
                        locationCity={`${e.venue.city}`}
                        url={e.event_url}
                        index={i++}
                      />
                    )
                    )
                  }
                </div>
                <div className='events-image'>
                  <Image src={iLaptopCoffee} responsive className='img-laptop-coffee' alt='laptop and coffee' />
                </div>
              </div>

            </div>
          </section>
        )

      case 'failure':
        return (
          <section id='events'  className='black-background'>
            <div className='section-container container-fluid'>
              <h1 className='section-title'>Events</h1>
              <div className='events-failed-message lead'>
                <h2>We meet every Thursday!</h2>
                <ul className='ul-meeting-schedule'>
                  <li>9:00 AM - Social time, Specialty's Cafe & Bakery, 5331 Hopyard Rd, Pleasanton</li>
                  <li>9:45 AM - Move to Dublin Library, 200 Civic Plaza, Dublin</li>
                  <li>10 AM - 12 PM - Code, get help and/or presentation</li>
                </ul>
                <button className='meeting-schedule' href='https://www.meetup.com/trivalleycoders/?scroll=true' bsStyle='success' bsSize='large'>
                  <img src={iMeetup} width={40} alt='meetup logo'/>
                  Tri-Valley Coders Meeting Schedule
                </button>
              </div>
            </div>
          </section>
            );
            default:
            return (
            <section id='events'  className='black-background'>
              <div className='section-container container-fluid'>
                <h2>Loading data...</h2>
              </div>
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

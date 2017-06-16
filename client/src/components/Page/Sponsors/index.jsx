// Sponsors
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import { Grid, Row } from 'react-bootstrap';
import Sponsor from './Sponsor';
import './style.css';

class Sponsors extends Component {
  componentWillMount() {
    this.props.requestReadSponsors();
  }

  render() {
    const { readSponsorsRequest } = this.props;
    switch (readSponsorsRequest.status) {
      case 'success':
        return (
          <section id='sponsors-section' className='sponsors-section'>
            <Grid className='outer-grid'>
              <Row className='main-row'>
                <h1 className='section-title'>Our Sponsors</h1>
                <div className='sponsors'>
                  {this.props.sponsors.map((s) => (
                    <Sponsor
                      key={s._id}
                      picture={s.picture}
                      name={s.name}
                      index={s.index}
                    />
                  ))}
                </div>
              </Row>
            </Grid>
          </section>
        )
      case 'failure':
        return (
          <section id='sponsors'>
            <Grid className='outer-grid'>
              <Row className='main-row'>
                <h2>Attempt to load sponsors failed</h2>
              </Row>
            </Grid>
          </section>
        );
      default:
        return (
          <section id='sponsors'>
            <Grid className='outer-grid'>
              <Row className='main-row'>
                <h2>Attempt to load sponsors failed</h2>
              </Row>
            </Grid>
          </section>
        );
    }
  }
}

Sponsors.propTypes = {
  requestReadSponsors: PropTypes.func.isRequired,
  readSponsorsRequest: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  readSponsorsRequest: selectors.getRequest(state, 'readSponsors'),
  sponsors: selectors.getSponsors(state),
});

export default connect(mapStateToProps, actionCreators)(Sponsors);

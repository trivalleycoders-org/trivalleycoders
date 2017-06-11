// Members
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
import * as actionCreators from '../../../store/actions';
import * as selectors from '../../../store/selectors'
import Member from './Member';
import './style.css';


class Members extends Component {

  componentWillMount() {
    this.props.requestReadMembers();
  }

  render() {
    const { readMembersRequest } = this.props;
    switch (readMembersRequest.status) {
      case 'success':
        return (
          <section id='members'>
            <Grid className='outer-grid'>
              <Row className='main-row'>
                <h1 className='section-title'>Members</h1>
                <div className='members'>
                  {this.props.members.sort((a, b) => a.index - b.index).map((m) => (
                    <Member
                      key={m._id}
                      _id={m._id}
                      picture={m.picture}
                      name={m.firstName}
                      role={m.role}
                      index={m.index}
                    />
                  ))}
                </div>
              </Row>
            </Grid>
          </section>
        )
      case 'failure':
        return (
          <section id='members'>
            <Grid className='outer-grid'>
              <Row className='main-row'>
                <h2>Attempt to load members failed</h2>
              </Row>
            </Grid>
          </section>
        );
      default:
        return (
          <section id='members'>
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

Members.propTypes = {
  requestReadMembers: PropTypes.func.isRequired,
  readMembersRequest: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  readMembersRequest: selectors.getRequest(state, 'readMembers'),
  members: selectors.getMembers(state),
});

export default connect(mapStateToProps, actionCreators)(Members);

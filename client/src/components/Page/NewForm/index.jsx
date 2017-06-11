// NewForm
import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Grid, Col, Button } from 'react-bootstrap';
import * as actionCreators from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import MemberRow from './MemberRow';
import * as ku from '../../../lib/ke-utils';


class NewForm extends Component {

  componentWillMount() {
    this.props.requestReadMembers();
  }

  render() {
    const { updateMember, newMember, readMembersRequest, requestCreateMember, requestUpdateMember, requestDeleteMember, newMemberId, updateShowManageMembers } = this.props;

    // ku.log('newMemberId', newMemberId, 'blue');
    // ku.log('newMember', newMember, 'blue');
    const updateLocalMember = (eventName, eventValue) => {
      ku.log('eventName:eventValue', `${eventName}:${eventValue}` , 'blue');

      const valId = newMember._id;
      const valFirstName = eventName === 'firstName'
        ? eventValue
        : newMember.firstName;
      const valLastName = eventName === 'lastName'
        ? eventValue
        : newMember.lastName;
      const valRole = eventName === 'role'
        ? eventValue
        : newMember.role;
      const valPicture = eventName === 'picture'
        ? eventValue
        : newMember.picture;
      const valIndex = eventName === 'index'
        ? eventValue
        : newMember.index;

      // ku.log('update values: ', `${valId}, ${valFirstName}, ${valLastName}, ${valRole}, ${valPicture}, ${valIndex}`, 'blue')
      updateMember(valId, valFirstName, valLastName, valRole, valPicture, valIndex)

    }

    return (
      <div>
        <h2>Manage Users</h2>
        <Button
          onClick={requestCreateMember}
        >
          New Member
        </Button>
        <Button
          onClick={() => requestUpdateMember(newMember._id, newMember)}
        >
          Save
        </Button>
        <Button
          onClick={() => requestDeleteMember(newMember._id, newMember)}
        >
          Cancel
        </Button>
        <Button
          onClick={() => updateShowManageMembers('no-show')}
        >
          Close
        </Button>
        <form>
          <Grid>
            <Col sm={4} md={2}>First Name</Col>
            <Col sm={4} md={2}>Last Name</Col>
            <Col sm={4} md={4}>Role</Col>
            <Col sm={4} md={3}>Picture</Col>
            <Col sm={4} md={1}>Index</Col>
            {this.props.members.sort((a, b) => a.formSort - b.formSort).map((m) => (
              <MemberRow
                key={m._id}
                _id={m._id}
                  firstName={m.firstName}
                  lastName={m.lastName}
                  new={m._id === newMemberId}
                  role={m.role}
                  picture={m.picture}
                  index={m.index}
                  update={updateLocalMember}
              />
            ))}
          </Grid>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let newMember;
  let newMemberId = selectors.getNewMemberId(state);
  //newMemberId === 'none'
    //? newMember = {}
    //: newMember = selectors.getMember(state, newMemberId)
  newMember = selectors.getMember(state, newMemberId);
  const o = {
    newMemberId,
    newMember,
    readMembersRequest: selectors.getRequest(state, 'readMembers'),
    members: selectors.getMembers(state),
  }
  return o;
};

export default connect(mapStateToProps, actionCreators)(NewForm);

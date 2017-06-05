// NewForm
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import * as actionCreators from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import * as ku from '../../../lib/ke-utils';

// const NewForm = ({ updateMember, member, requestCreateMember, requestUpdateMember }) => {
var first = true;
class NewForm extends Component {
  render() {
    const { updateMember, createNewMember, updateNewMember, newMember, requestCreateMember, requestUpdateMember } = this.props;
    if (first){
      first = false;
      createNewMember();
    }
    console.log("form", this.props.newMember());
    return (
      <div>
        <Button
          onClick={requestCreateMember}
        >
          New Member
        </Button>
        <Button
          onClick={() => requestUpdateMember('newMember', newMember)}
        >
          Save
        </Button>

        <h1>New Form</h1>
        <form>
          <FormControl
            key={'firstName'}
            type="text"
            onChange={(event) => {updateNewMember(newMember._id, event.target.value)}}//problem is how he is passing things into the onchange
            placeholder='First Name'
            value={newMember.firstName}
          />
          <FormControl
            key={'lastName'}
            type="text"
            onChange={(event) => updateNewMember(newMember._id, newMember.firstName, event.target.value)}
            placeholder='Last Name'
            value={newMember.lastName}
          />
          <FormControl
            key={'picture'}
            type="text"
            onChange={(event) => updateNewMember(newMember._id, newMember.firstName, newMember.lastName, newMember.role, event.target.value)}
            placeholder='Picture'
            value={newMember.picture}
          />
          <FormControl
            key={'role'}
            type="text"
            onChange={(event) => updateNewMember(newMember._id, newMember.firstName, newMember.lastName, event.target.value)}
            placeholder='Role'
            value={newMember.role}
          />
        </form>
      </div>
    )
  }
}

/*NewForm.propTypes = {
  member: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
  }),
};*/

const mapStateToProps = (state) => {
  console.log(state.ui);
  const newMember = selectors.getNewMember(state);
  if (newMember != null) {
    var temp = {newMember: newMember}
    console.log("mapping newMember", temp);
    return {temp};
  }
  else return {newMember: null};
};

export default connect(mapStateToProps, actionCreators)(NewForm);

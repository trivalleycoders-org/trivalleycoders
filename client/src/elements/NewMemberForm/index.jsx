// Members
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, FormControl, Button, Modal } from 'react-bootstrap';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors'
import * as style from './style.css';

class NewMemberForm extends Component {
  componentWillMount() {
    // this.props.requestReadMember(this.props.id);//this is probably wrong
  }

/*
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
*/
  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One fine body...
          </Modal.Body>

          <Modal.Footer>
            <Button>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

NewMemberForm.propTypes = {
  requestReadMember: PropTypes.func.isRequired,
  readMemberRequest: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  readMemberRequest: selectors.getRequest(state, 'readMember'),
  member: selectors.getMember(state),
});

export default connect(mapStateToProps, actionCreators)(NewMemberForm);

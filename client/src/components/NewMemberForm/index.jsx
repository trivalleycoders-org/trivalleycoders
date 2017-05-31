// NewMemberForm
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import * as selectors from '../../store/selectors'
import * as actionCreators from '../../store/actions';
// import './style.css';
import * as ku from '../../lib/ke-utils'

class NewMemberForm extends Component {


  render() {
    // const { newMemberForm } = this.props;
    ku.log('hello', this.props.newMember, 'red');
    return (
      <div>
        <Modal show={true}  onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <Grid>
                <Col xs={6} md={6}>
                  <FormGroup>
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl
                      id="firstName"
                      type="text"
                      placeholder="Enter first name"
                      onChange={(event) => actionCreators.setNewMember(event.target.value)}
                      value={this.props.newMember}
                    />
                  </FormGroup>
                </Col>
              </Grid>
            </form>
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

// NewMemberForm.propTypes = {
//   requestReadNewMemberForm: PropTypes.func.isRequired,
//   readNewMemberFormRequest: PropTypes.object.isRequired,
// }

const mapStateToProps = (state) => ({
  // readNewMemberFormRequest: selectors.getRequest(state, 'readNewMemberForm'),
  newMember: selectors.getNewMember(state),
});

export default connect(mapStateToProps, actionCreators)(NewMemberForm);

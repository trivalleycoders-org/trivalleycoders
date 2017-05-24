// Members
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '/../store/actions';
import * as selectors from '/../store/selectors'
import * as style from './style';
import * as ku from '/../lib/ke-utils';

class NewMemberForm extends Component {
  componentWillMount() {
    this.props.requestReadMember(this.props.id);//this is probably wrong
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    ku.log('props.member', this.props.member, 'green');
    return (
      <div id='member' style={style.wrapper}>
        <h1 style={style.title}>Member</h1>
        <div style={style.member}>
         <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
      </form>
        </div>
      </div>
    )
  }
}

Member.propTypes = {
  requestReadMember: PropTypes.func.isRequired,
  readMemberRequest: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  readMemberRequest: selectors.getRequest(state, 'readMember'),
  member: selectors.getMember(state),
});

export default connect(mapStateToProps, actionCreators)(NewMemberForm);

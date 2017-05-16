// Members
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../store/actions';
import * as selectors from '../../../../store/selectors'
import Member from './Member';
import * as style from './style';
import * as ku from '../../../../../../lib/ke-utils'

class Members extends Component {
  componentWillMount() {
    this.props.requestReadMembers();
  }

  render() {
    const { readMembersRequest } = this.props;
    switch (readMembersRequest.status) {
      case 'success':
        ku.log('props.members.length', this.props.members.length, 'red');
        return (
          <div id='members' style={style.wrapper}>
            {this.props.members.map((m) => (
              <Member
                key={m._id}
                picture={m.picture}
                name={m.name}
                role={m.role}
                index={m.index}
              />
            ))}
          </div>
        )
      case 'failure':
        return (
          <div id='members' style={style.wrapper}>
            <h2>Attempt to load data failed</h2>
          </div>
        );
      default:
        return (
          <div id='members' style={style.wrapper}>
            <h2>Loading data...</h2>
          </div>
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

// Projects
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../store/actions';
import * as selectors from '../../../../store/selectors'
import Member from './Member';
import * as style from './style';

const Members = ({ members }) => (
  <div id='members' style={style.wrapper}>
    {members.map((m) => (
      <Member
        key={m._id}
        picture={m.picture}
        name={m.name}
        role={m.role}
        index={m.index}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  members: selectors.getMembers(state),
});

export default connect(mapStateToProps, actionCreators)(Members);

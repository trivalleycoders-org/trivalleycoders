// Navigation
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../store/actions';
import * as selectors from '../../../../store/selectors'
import * as style from './style';
import Button from '../../../../elements/Button'

class Navigation extends Component {
  componentWillMount() {
    this.props.requestReadNavButtons();
  }

  render() {
    const { readNavButtonsRequest } = this.props;
    switch (readNavButtonsRequest.status){
      case 'success':
        return (
          <div id='navButtons' style={style.wrapper}>
            {this.props.navButtons.map((b) => (
              <Button
                key={b._id}
                caption={b.caption}
                type={'menu'}
                colorStatus={'success'}
              >
                {b.caption}
              </Button>
            ))}
          </div>
        )
      case 'failure':
       return (
          <div id='navButtons' style={style.wrapper}>
            <h2>Attempt to load navButtons failed</h2>
          </div>
        );
      default:
        return (
          <div id='navButtons' style={style.wrapper}>
            <h2>Loading data...</h2>
          </div>
        );
    }
  }
};

Navigation.propTypes = {
  requestReadNavButtons: PropTypes.func.isRequired,
  readNavButtonsRequest: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  readNavButtonsRequest: selectors.getRequest(state, 'readNavButtons'),
  navButtons: selectors.getNavButtons(state),
});

export default connect(mapStateToProps, actionCreators)(Navigation);

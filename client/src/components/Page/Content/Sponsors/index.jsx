import React from 'react';
import * as style from './style';
import { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../store/actions';
import * as selectors from '../../../../store/selectors'
import Sponsor from './Sponsor';

class Sponsors extends Component {
  componentWillMount() {
    this.props.requestReadSponsors();
  }

  render() {
    const { readSponsorsRequest } = this.props;
    switch (readSponsorsRequest.status) {
      case 'success':
        return (
          <div id='sponsors' style={style.wrapper}>
		    <h1>Our Sponsors</h1>
		    {this.props.sponsors.map((s) => (
                    <Sponsor
                      key={s._id}
                      picture={s.picture}
                      name={s.name}
                      index={s.index}
                    />
                  ))}
		  </div>
        )
      case 'failure':
        return (
          <div id='sponsors' style={style.wrapper}>
            <h2>Attempt to load sponsors failed</h2>
          </div>
        );
      default:
        return (
          <div id='sponsors' style={style.wrapper}>
            <h2>Loading data...</h2>
          </div>
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
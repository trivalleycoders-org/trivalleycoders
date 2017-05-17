// TechLogos
import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../store/actions';
import * as selectors from '../../../../store/selectors'
import * as style from './style';
import TechLogo from './TechLogo';
import * as ku from '../../../../../../lib/ke-utils'

class Techlogos extends Component {
  componentWillMount() {
    this.props.requestReadTechlogos();
  }

  render() {
    const{ readTechlogosRequest } = this.props;
    switch (readTechlogosRequest.status) {
      case 'success':
        ku.log('props.techlogos.length', this.props.techlogos.length, 'red');
        return (
          <div id='techlogos' style={style.wrapper}>
            <h1 style={style.title}>Learn With Us</h1>
            <p style={style.text}>Our core compentency is the MERN stack, Mongo, Express, React and Node. When you join the group we guide you from beginner learning HTML, CSS & JavaScript to a software developer building apps with the MERN stack.</p>
            <p>As a beginner you will get help learning the basics. When you are ready you will work on real projects for real clients gaining knowledge and valuable experience along the way.</p>

            <h1>the basics</h1>
            <h1>MERN Stack</h1>
            <h1>Additional</h1>
            <h1>Tools</h1>
            <div id='logos' style={style.logos}>
              {this.props.techlogos.map((t) => (
                <TechLogo
                  key={t._id}
                  name={t.name}
                  url={t.url}
                  shape={t.shape}
                />
              ))}
            </div>
          </div>
        )
      case 'failure':
        return (
          <div id='techlogos' style={style.wrapper}>
            <h2>Attempt to load data failed</h2>
          </div>
        );
      default:
        return (
          <div id='techlogos' style={style.wrapper}>
            <h2>Loading data...</h2>
          </div>
        );
    }
  }
}

Techlogos.propTypes = {
  requestReadTechlogos: PropTypes.func.isRequired,
  readTechlogosRequest: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  readTechlogosRequest: selectors.getRequest(state, 'readTechlogos'),
  techlogos: selectors.getTechlogos(state),
});

export default connect(mapStateToProps, actionCreators)(Techlogos);

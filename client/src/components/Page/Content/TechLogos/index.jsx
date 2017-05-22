// TechLogos
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../store/actions';
import * as selectors from '../../../../store/selectors'
import * as style from './style.css';
import TechLogo from './TechLogo';
import * as ku from '../../../../lib/ke-utils'

class TechLogos extends Component {
  componentWillMount() {
    this.props.requestReadTechlogos();
  }

  render() {
    const{ readTechlogosRequest } = this.props;
    switch (readTechlogosRequest.status) {
      case 'success':
        const basics = this.props.techLogos.filter((t) =>
          t.category === 'basics'
        ).map((t) => (
          <TechLogo
            key={t._id}
            style={style.logo}
            name={t.name}
            url={t.url}
            shape={t.shape}
          />
        ))
        const mernStack = this.props.techLogos.filter((t) =>
          t.category === 'mern'
        ).map((t) => (
          <TechLogo
            key={t._id}
            name={t.name}
            url={t.url}
            shape={t.shape}
          />
        ))
        const tools = this.props.techLogos.filter((t) =>
          t.category === 'tools'
        ).map((t) => (
          <TechLogo
            key={t._id}
            name={t.name}
            url={t.url}
            shape={t.shape}
          />
        ))
        return (
          <div >
            <div >
              <Grid >
                <Row>
                  <Col md={12}>
                    <div className='tech-logos-heading'>
                      <h1>Learn With Us</h1>
                    </div>
                    <div className='tech-logos-text'>
                      <p>Our core compentency is the MERN stack, Mongo, Express, React and Node. When you join the group we guide you from beginner learning HTML, CSS & JavaScript to a software developer building apps with the MERN stack.</p>
                      <p>As a beginner you will get help learning the basics. When you are ready you will work on real projects for real clients gaining knowledge and valuable experience along the way.</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Grid>
                    <Row>
                      <Col md={4}>
                        <span>the basics</span>
                      </Col>
                      <Col md={8}>
                        {basics}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <span>MERN Stack</span>
                      </Col>
                      <Col md={8}>
                        {mernStack}
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <span>Tools</span>
                      </Col>
                      <Col md={8}>
                        {tools}
                      </Col>
                    </Row>
                  </Grid>
                </Row>
              </Grid>
            </div>
          </div>
        )
      case 'failure':
        return (
          <div id='techlogos'>
            <h2>Attempt to load data failed</h2>
          </div>
        );
      default:
        return (
          <div id='techlogos'>
            <h2>Loading data...</h2>
          </div>
        );
    }
  }
}

TechLogos.propTypes = {
  requestReadTechlogos: PropTypes.func.isRequired,
  readTechlogosRequest: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  readTechlogosRequest: selectors.getRequest(state, 'readTechlogos'),
  techLogos: selectors.getTechlogos(state),
});

export default connect(mapStateToProps, actionCreators)(TechLogos);

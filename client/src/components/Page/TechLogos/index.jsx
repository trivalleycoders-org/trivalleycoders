// TechLogos
import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions';
import * as selectors from '../../../store/selectors'
import TechLogo from './TechLogo';
import './style.css';
// Basics
import iHTML from './../../../images/tech-logos/html-5.01.svg'
import iCSS from './../../../images/tech-logos/css-3.01.svg'
import iJS from './../../../images/tech-logos/javascript.svg'
// MERN
// import iMongo from './../../../images/tech-logos/mongodb.on-black.01.svg'
import iMongo from './../../../images/tech-logos/mongodb.svg'
// import iExpress from './../../../images/tech-logos/express.on-black.01.svg'
import iExpress from './../../../images/tech-logos/express.svg'
import iReact from './../../../images/tech-logos/react.svg'
import iNode from './../../../images/tech-logos/nodejs.on-black.01.svg'
// import iNode from './../../../images/tech-logos/nodejs.svg'


class TechLogos extends Component {
  render() {
    // image, url, name
    const arrBasics = [
      {
        name: 'HTML 5',
        image: iHTML,
      },
      {
        name: 'CSS 3',
        image: iCSS,
      },
      {
        name: 'JavaScript',
        image: iJS,
      },
    ]
    const basics = arrBasics.map((t) => (
      <TechLogo
        key={t.name}
        name={t.name}
        url={t.image}
      />
    ))

    const arrMERN = [
      {
        name: 'MongoDB',
        image: iMongo,
        style: 'express-logo',
      },
      {
        name: 'Express',
        image: iExpress,
        style: 'express-logo',
      },
      {
        name: 'React',
        image: iReact,
      },
      {
        name: 'Node',
        image: iNode,
      },
    ]

    const mern = arrMERN.map((t) => (
      <TechLogo
        key={t.name}
        name={t.name}
        style={t.style}
        url={t.image}
      />
    ))


    return (
      <section id='tech-logos' className='tech-logos green-background dark-font'>
        <Grid className='outer-grid'>
          <Row className='main-row'>
            <h1 className='section-title'>Learn With Us</h1>
            <p className='lead'>Our core compentency is the MERN stack, Mongo, Express, React and Node. When you join the group we guide you from beginner learning HTML, CSS & JavaScript to a software developer building apps with the MERN stack.</p>
            <p className='lead'>As a beginner you will get help learning the basics. When you are ready you will work on real projects for real clients gaining knowledge and valuable experience along the way.</p>
          </Row>
          <Row className='row-tech-logos'>
            <h3 className='tech-logo-title'>The Basics</h3>
            <div className='logo-row'>
              {basics}
            </div>
            <h3 className='tech-logo-title'>MERN Stack</h3>
            <div className='logo-row'>
              {mern}
            </div>
          </Row>
        </Grid>
      </section>
    )
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

// TechLogos
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
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
import iMongo from './../../../images/tech-logos/mongodb.on-black.01.svg'
import iExpress from './../../../images/tech-logos/express.on-black.01.svg'
import iReact from './../../../images/tech-logos/react.svg'
import iNode from './../../../images/tech-logos/nodejs.on-black.01.svg'
// Other
import iBabel from './../../../images/tech-logos/babel.svg'
import iBootstrap from './../../../images/tech-logos/bootstrap.svg'
import iNodemon from './../../../images/tech-logos/nodemon.svg'
import iPromises from './../../../images/tech-logos/promises.svg'
import iRamda from './../../../images/tech-logos/ramda.black.01.svg'
import iRedux from './../../../images/tech-logos/redux.svg'
import iUbuntu from './../../../images/tech-logos/ubuntu.svg'
import iWebpack from './../../../images/tech-logos/webpack.svg'

// Tools
import iAtom from './../../../images/tech-logos/atom.svg'
import iGit from './../../../images/tech-logos/git-logo-white.svg'
import iGitHub from './../../../images/tech-logos/github.octocat.on-white.jpg'
import iNPM from './../../../images/tech-logos/npm.svg'
import iSublime from './../../../images/tech-logos/sublime.hicolor.256x256.png'
import iSlack from './../../../images/tech-logos/slack.svg'
//
// import i from './../../../images/tech-logos'
//
// Utils
import * as ku from './../../../lib/ke-utils'

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
      },
      {
        name: 'Express',
        image: iExpress,
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
        url={t.image}
      />
    ))

    const arrOther = [
      {
        name: 'Babel',
        image: iBabel,
      },
      {
        name: 'Bootstrap',
        image: iBootstrap,
      },
      {
        name: 'Nodemon',
        image: iNodemon,
      },
      {
        name: 'Promises',
        image: iPromises,
      },
      {
        name: 'Ramda',
        image: iRamda,
      },
      {
        name: 'Redux',
        image: iRedux,
      },
      {
        name: 'Ubuntu',
        image: iUbuntu,
      },
      {
        name: 'Webpack',
        image: iWebpack,
      },
    ]

    const other = arrOther.map((t) => (
      <TechLogo
        key={t.name}
        name={t.name}
        url={t.image}
      />
    ))

    const arrTools = [
      {
        name: 'Atom',
        image: iAtom,
      },
      {
        name: 'Git',
        image: iGit,
      },
      {
        name: 'GitHub',
        image: iGitHub,
      },
      {
        name: 'NPM',
        image: iNPM,
      },
      {
        name: 'Sublime',
        image: iSublime,
      },
      {
        name: 'Slack',
        image: iSlack,
      },
    ]

    const tools = arrTools.map((t) => (
      <TechLogo
        key={t.name}
        name={t.name}
        url={t.image}
      />
    ))

    return (
      <section id='tech-logos'>
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

            <h3 className='tech-logo-title'>Supporting</h3>
            <div className='logo-row'>
              {other}
            </div>
            <h3 className='tech-logo-title'>Tools</h3>
            <div className='logo-row'>
              {tools}
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

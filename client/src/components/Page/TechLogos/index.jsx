// TechLogos
import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { Component } from 'react';
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
// import iNode from './../../../images/tech-logos/nodejs.on-black.01.svg'
// import iNode from './../../../images/tech-logos/nodejs.svg'
import iNode from './../../../images/tech-logos/nodejs.on-green.svg'

class TechLogos extends Component {
  render() {
    // image, url, name
    const arrBasics = [
      {
        name: 'HTML 5',
        image: iHTML,
        style: "small-image",
      },
      {
        name: 'CSS 3',
        image: iCSS,
        style: "small-image",
      },
      {
        name: 'JavaScript',
        image: iJS,
        style: "small-image",
      },
    ]
    const basics = arrBasics.map((t) => (
      <TechLogo
        key={t.name}
        name={t.name}
        url={t.image}
        style={t.style}
      />
    ))

    const arrMERN = [
      {
        name: 'MongoDB',
        image: iMongo,
        style: 'wide-image',
      },
      {
        name: 'Express',
        image: iExpress,
        style: 'express-image',
      },
      {
        name: 'React',
        image: iReact,
        style: "small-image",
      },
      {
        name: 'Node',
        image: iNode,
        style: "small-image",
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
      <section id='tech-logos' className='tech-logos green-background'>
        <Grid className='outer-grid'>
          <Row className='main-row'>
            <h1 className='section-title'>Learn With Us</h1>
            <p className='lead'>Our core compentency is the MERN stack, Mongo, Express, React and Node. When you join the group we guide you from beginner learning HTML, CSS & JavaScript to a software developer building apps with the MERN (<b>M</b>ongoDB, <b>E</b>xpress, <b>R</b>eact & <b>N</b>ode.js) stack.</p>
            <p className='lead'>As a beginner you will get help learning the basics. When you are ready you will work on real projects for real clients gaining knowledge and valuable experience along the way.</p>
          </Row>
          <Row>
            <h3 className='logo-title'>The Basics</h3>
            <div className='logo-row'>
              {basics}
            </div>
            <h3 className='logo-title'>MERN Stack</h3>
            <div className='logo-row'>
              {mern}
            </div>
          </Row>
        </Grid>
      </section>
    )
  }
}

export default TechLogos;

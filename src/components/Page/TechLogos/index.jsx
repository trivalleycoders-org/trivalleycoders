// TechLogos
import React, { Component } from 'react';
import TechLogo from './TechLogo';
import './style.css';
import { basicsLogos, mernLogos } from './logo-data'
import { Image } from 'react-bootstrap'
import iWomenLearning from './images/women-learning.jpeg'
import Responsive from 'react-responsive'
import { brand, menuItems, breakPoints } from '../TopBar/topbar.config'

const TechLogos = (props) => {
  const NarrowWidth = ({ children }) => <Responsive maxWidth={breakPoints.narrowWidthMax} children={children} />
  const MediumWidth = ({ children }) => <Responsive minWidth={breakPoints.mediumWidthMin} maxWidth={breakPoints.mediumWidthMax} children={children} />
  const WideWidth = ({ children }) => <Responsive minWidth={breakPoints.wideWidthMin} children={children} />

  const basics = basicsLogos.map((t) => (
    <TechLogo
      key={t.name}
      name={t.name}
      url={t.image}
      style={t.style}
    />
  ))

  const mern = mernLogos.map((t) => (
    <TechLogo
      key={t.name}
      name={t.name}
      style={t.style}
      url={t.image}
    />
  ))

  return (

    <div className='wrapper-full-width green-background'>
      <div className='wrapper-max-width-1080'>
        <h1 className='section-title'>Learn With Us</h1>
        <WideWidth>
          <div className='techlogos-wide-container'>
            <div className='techlogos-wide-top-container'>
              <div className='techlogos-wide-left'>
                <Image src={iWomenLearning} responsive className='img-women-learning' alt='women learning' />
              </div>
              <div className='techlogos-wide-right'>
                <p>Our core compentency is the MERN stack, Mongo, Express, React and Node. When you join the group we guide you from beginner learning HTML, CSS & JavaScript to a software developer building apps with the MERN (<b>M</b>ongoDB, <b>E</b>xpress, <b>R</b>eact & <b>N</b>ode.js) stack.</p>
                <p>As a beginner you will get help learning the basics. When you are ready you will work on real projects for real clients gaining knowledge and valuable experience along the way.</p>

              </div>
            </div>
            <div className='techlogos-wide-bottom'>
              <h3 className='logo-title'>The Basics</h3>
              <div className='logo-row'>
                {basics}
              </div>
              <h3 className='logo-title'>MERN Stack</h3>
              <div>
                <div className='logo-row'>
                  {mern}
                </div>
              </div>
            </div>
          </div>
        </WideWidth>
        <MediumWidth>
          <div className='techlogos-medium-container wrapper-narrow-text'>
            <p>Our core compentency is the MERN stack, Mongo, Express, React and Node. When you join the group we guide you from beginner learning HTML, CSS & JavaScript to a software developer building apps with the MERN (<b>M</b>ongoDB, <b>E</b>xpress, <b>R</b>eact & <b>N</b>ode.js) stack.</p>
            <p>As a beginner you will get help learning the basics. When you are ready you will work on real projects for real clients gaining knowledge and valuable experience along the way.</p>
            <h3 className='logo-title'>The Basics</h3>
            <div className='logo-row'>
              {basics}
            </div>
            <h3 className='logo-title'>MERN Stack</h3>
            <div>
              <div className='logo-row'>
                {mern}
              </div>
            </div>
          </div>
        </MediumWidth>
        <NarrowWidth>
          <div className='techlogos-medium-container wrapper-narrow-text'>
            <p>Our core compentency is the MERN stack, Mongo, Express, React and Node. When you join the group we guide you from beginner learning HTML, CSS & JavaScript to a software developer building apps with the MERN (<b>M</b>ongoDB, <b>E</b>xpress, <b>R</b>eact & <b>N</b>ode.js) stack.</p>
            <p>As a beginner you will get help learning the basics. When you are ready you will work on real projects for real clients gaining knowledge and valuable experience along the way.</p>
            <h3 className='logo-title'>The Basics</h3>
            <div className='logo-row'>
              {basics}
            </div>
            <h3 className='logo-title'>MERN Stack</h3>
            <div>
              <div className='logo-row'>
                {mern}
              </div>
            </div>
          </div>
        </NarrowWidth>
      </div>
    </div>
      )
      }

      export default TechLogos;

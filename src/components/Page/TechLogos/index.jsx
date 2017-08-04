// TechLogos
import React, { Component } from 'react';
import TechLogo from './TechLogo';
import './style.css';
import { basicsLogos, mernLogos } from './logo-data'
import { Image } from 'react-bootstrap'
import iWomenLearning from './images/women-learning.jpeg'

class TechLogos extends Component {
  render() {
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
      <section id='tech-logos' className='green-background'>
        <div className='section-container container-fluid techlogo-container'>
          <div className='tech-logos-body'>
            <div className='tech-logos-image'>
              <Image src={iWomenLearning} responsive className='img-women-learning' alt='women learning' />
            </div>
            <div className='tech-logo-subcontainer'>
              <h1 className='section-title'>Learn With Us</h1>
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

          </div>
        </div>
      </section>
    )
  }
}

export default TechLogos;

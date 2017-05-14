// TechLogos
import React from 'react';
import * as style from './style';
import TechLogo from './TechLogo';
import tech from '../../../../data/technologies';

const TechLogos = () => (
  <div id='tech-logos' style={style.wrapper}>
    <h1 style={style.title}>Learn With Us</h1>
    <p style={style.text}>Our core compentency is the MERN stack, Mongo, Express, React and Node. When you join the group we guide you from beginner learning HTML, CSS & JavaScript to a software developer building apps with the MERN stack.</p>
    <p>As a beginner you will get help learning the basics. When you are ready you will work on real projects for real clients gaining knowledge and valuable experience along the way.</p>

    <h1>the basics</h1>
    <h1>MERN Stack</h1>
    <h1>Additional</h1>
    <h1>Tools</h1>
    <div id='logos' style={style.logos}>
      {tech.map((t) => (
        <TechLogo
          key={t.url}
          name={t.name}
          url={t.url}
          shape={t.shape}
        />
      ))}
    </div>
  </div>
);

export default TechLogos;

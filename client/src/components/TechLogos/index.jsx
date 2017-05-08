// TechLogos
import React from 'react';
import * as style from './style';
import TechLogo from '../TechLogo';
import tech from '../../data/technologies';

const TechLogos = () => (
  <div id='tech-logos' style={style.wrapper}>
    {tech.map((t) => (
       <TechLogo
         key={t.url}
         name={t.name}
         url={t.url}
         shape={t.shape}
       />
    	))}
  </div>
);

export default TechLogos;

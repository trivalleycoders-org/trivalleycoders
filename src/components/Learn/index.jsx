// Learn
import React from 'react';
import * as style from './style';
import TechCard from '../TechCard'
import tech from '../../data/technologies'

const Learn = () => (
  <div id='learn' style={style.wrapper}>
    {tech.map((t) => (
       <TechCard
         name={t.name}
         url={t.url}
         shape={t.shape}
       />
    	))}
  </div>
);

export default Learn;

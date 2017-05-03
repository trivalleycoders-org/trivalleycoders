// Learn
import React from 'react';
import * as style from './style';

const technologies = [
  {
    name: 'HTML5',
    url: 'http://klequis.com/images/logo.store/500x500/html5.500x500.svg',
  },
  {
  	name: 'CSS3',
  	url: 'http://klequis.com/images/logo.store/500x500/css3.500x500.svg',
  },

]


const Learn = () => (
  <div id='learn' style={style.wrapper}>
    {technologies.map((t) => (
       <TechCard
         name={t.name}
         url={t.url}
       />
    	))} 
  </div>
);

export default Learn;

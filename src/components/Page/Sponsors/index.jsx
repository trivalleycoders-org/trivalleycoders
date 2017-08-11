// Sponsors
import React from 'react';
import { Component } from 'react';
import sZelda from './images/zelda.sponsor.jpeg'
import Sponsor from './Sponsor';
import './style.css';

class Sponsors extends Component {


  render() {
    const arrSponsors = [
      {
        id: 100,
        picture: sZelda,
        name: 'Zelda Kohn',
        tagLine: 'For all you realestate needs in the Tri-valley!',
      },
    ]

    const sponsors = arrSponsors.map((s) => (
      <Sponsor
        key={s.id}
        picture={s.picture}
        name={s.name}
        tagLine={s.tagLine}
      />
    ))
    return (
      <section id='sponsors' className='wrapper-full-width black-background'>
        <div className='wrapper-max-width-1080'>
          <h1 className='section-title green-text'>Our Sponsors</h1>
          <div className='sponsors'>
            {sponsors}
          </div>
        </div>
      </section>
    )
  }
}
export default Sponsors;

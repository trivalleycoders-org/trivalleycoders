// Events
import React from 'react';
import * as style from './style';
import Event from '../Event';
import events from '../../data/events';

const Events = () => (
  <div id='events' style={style.wrapper}>
    {events.map((e) => (
      <Event
        key={e.date}
        date={e.date}
        name={e.name}
        location={e.location}
      />
    ))}
  </div>
);

export default Events;

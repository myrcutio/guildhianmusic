import React from 'react';
import Typography from '@material-ui/core/Typography';
import * as events from './events.json';

const NewsEvent = (event) => (
    <li key={event.title + event.date}>
        <div>{event.title}</div>
        <div>{event.subtitle}</div>
        {event.location ? (<span>in {event.location}</span>): ""}
        {event.date ? (<span> {event.date}</span>): ""}
        <p>{event.description}</p>
        {event.postscript ? (<p>{event.postscript}</p>) : ""}
    </li>
)

export const NewsEvents = () => (
  <div>
    <Typography variant="h6">NewsEvents</Typography>
      <ul>
          {events.events ? events.events.map(e => NewsEvent(e)) : ""}
      </ul>
  </div>
);

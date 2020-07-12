import React from 'react';
import Typography from '@material-ui/core/Typography';
import * as events from './events.json';

const NewsEvent = (event) => (
    <figure>
        <figcaption>{event.title}</figcaption>
        <figcaption>{event.subtitle}</figcaption>
        {event.location ? (<span>in {event.location}</span>): ""}
        {event.date ? (<span> {event.date}</span>): ""}
        <p>{event.description}</p>
        {event.postscript ? (<p>{event.postscript}</p>) : ""}
    </figure>
)

export const NewsEvents = () => (
  <div>
    <Typography variant="h6">NewsEvents</Typography>
      {events.events ? events.events.map(e => NewsEvent(e)) : ""}
  </div>
);

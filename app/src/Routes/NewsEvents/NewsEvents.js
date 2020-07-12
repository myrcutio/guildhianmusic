import React from 'react';
import Typography from '@material-ui/core/Typography';
import * as events from './events.json';

const NewsEvent = (event) => {
    const key = `${event.title}-${event.date}`
    return (
        <li key={key}>
            <div>{event.title}</div>
            <div>{event.subtitle}</div>
            {event.location && (<span>in {event.location}</span>)}
            {event.date && (<span> {event.date}</span>)}
            <p>{event.description}</p>
            {event.postscript && (<p>{event.postscript}</p>)}
        </li>
    )
}

export const NewsEvents = () => {
    const evts = events.events && events.events.map(e => NewsEvent(e))
    return (
        <div>
            <Typography variant="h6">NewsEvents</Typography>
            {evts && (<ul>{evts}</ul>)}
        </div>
    );
}

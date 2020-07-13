import React from 'react';
import Typography from '@material-ui/core/Typography';
import * as events from './events.json';
import * as works from '../Works/works.json';

const categories = Object.keys(works.categories)
const pieceList = categories.reduce((pieces, category) => {
    const categoryPieces = works.categories[category].map(p => p.title)
    return pieces.concat(categoryPieces)
}, [])

const italicizePieces = (description) => {
    pieceList.forEach(piece => {
        description = description.replace(new RegExp(piece,'g'), `<i>${piece}</i>`)
    })
    return description
}

const NewsEvent = (event) => {
    const key = `${event.title}-${event.date}`
    const highlightedDescription = italicizePieces(event.description)

    return (
        <li key={key}>
            <div>{event.title}</div>
            <div>{event.subtitle}</div>
            {event.location && (<span>in {event.location}</span>)}
            {event.date && (<span> {event.date}</span>)}
            {highlightedDescription && (<div dangerouslySetInnerHTML={{__html: highlightedDescription}}></div>)}
            {event.postscript && (<div>{event.postscript}</div>)}
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

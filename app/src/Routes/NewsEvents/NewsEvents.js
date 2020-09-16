import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import * as events from './events.json';
import * as works from '../Works/works.json';
import css from './NewsEvents.module.scss';

const categories = Object.keys(works.categories);
const pieceList = categories.reduce((pieces, category) => {
const categoryPieces = works.categories[category].map((p) => p.title);
  return pieces.concat(categoryPieces);
}, []);

const italicizePieces = (description) => {
  pieceList.forEach((piece) => {
    description = description.replace(
      new RegExp(piece, 'g'),
      `<i>${piece}</i>`
    );
  });
  return description;
};

const NewsEvent = (event) => {
  const { title, subtitle, location, date, description, postscript } = event;
  const key = `${title}-${date}`;
  const highlightedDescription = italicizePieces(description);
  const highlightedPostscript = postscript ? italicizePieces(postscript) : '';

  return (
    <ListItem key={key} className={css.eventList} disableGutters>
      <div>
        <Typography variant="h6">{title}</Typography>
        <div>{subtitle}</div>
        {location && <span>in {location}</span>}
        {date && <span> {date}</span>}
        {highlightedDescription && (
          <div
            className={css.description}
            dangerouslySetInnerHTML={{ __html: highlightedDescription }}
          />
        )}
        {postscript && (
          <div
            className={css.postscript}
            dangerouslySetInnerHTML={{ __html: highlightedPostscript }}
          />
        )}
      </div>
    </ListItem>
  );
};

export const NewsEvents = () => {
  const evts = events.events && events.events.map((e) => NewsEvent(e));
  return (
    <div>
      <Typography variant="h4">News & Events</Typography>
      {evts && <List>{evts}</List>}
    </div>
  );
};

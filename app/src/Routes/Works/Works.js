import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Typography from '@material-ui/core/Typography';
import * as works from './works.json';
import css from './Works.module.scss';

const Piece = (piece) => {
  const { title, type, instruments, detailLink, external } = piece;
  const key = `${title}-${type}`;
  const allInstruments = instruments && instruments.join(', ');

  return (
    <ListItem
      key={key}
      href={detailLink}
      target={external ? '_blank' : ''}
      title={`View more details about ${title}`}
      component="a"
      className={css.piece}
      button
    >
      <div className={css.title}>{title}</div>
      {type && <div className={css.type}>({type})</div>}
      {allInstruments && (
        <div className={css.instruments}>Instruments: {allInstruments}</div>
      )}
      {external && (
        <OpenInNewIcon
          className={css.openInNewIcon}
          color="disabled"
          fontSize="small"
          titleAccess="Opens in new window"
        />
      )}
    </ListItem>
  );
};

const WorksCategory = (categoryName, category) => {
  const pieces = category && category.map((c) => Piece(c));
  return (
    <Fragment key={categoryName}>
      <Typography variant="h6">{categoryName}</Typography>
      {pieces && <List>{pieces}</List>}
    </Fragment>
  );
};

export const Works = () => {
  const categoryKeys = Object.keys(works.categories);
  const categories =
    categoryKeys &&
    categoryKeys.map((category) =>
      WorksCategory(category, works.categories[category])
    );
  return (
    <div>
      <Typography variant="h4">Works</Typography>
      {categories && categories}
    </div>
  );
};

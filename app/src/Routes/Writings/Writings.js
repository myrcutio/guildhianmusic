import React, { Fragment, useEffect, useRef, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import kebabCase from 'lodash-es/kebabCase';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import * as writings from './writings.json';
import css from './Writings.module.scss';
import svgs from './svg.js'

const Piece = (piece) => {
  const {
    title,
    type,
    svgpath,
  } = piece;
 
  const key = `${title}-${type}`;
  const anchorTitle = kebabCase(title);
  const { hash } = window.location;
  const [expanded, setExpanded] = useState(hash === `#${anchorTitle}`);
  const elementRef = useRef(null);

  useEffect(() => {
    if (hash === `#${anchorTitle}`) {
      setExpanded(true);
      elementRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [hash, anchorTitle]);

  

  return (
    <Accordion
      key={key}
      expanded={expanded}
      onClick={() => setExpanded(!expanded)}
      ref={elementRef}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div>
          <div className={css.piece}>
            <div className={css.title}>
              <span>{title}</span>
            </div>
            {type && <div className={css.type}>({type})</div>}
          </div>

        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={css.details}>
          {svgpath && <img src={svgs[svgpath]} alt="writings content"/>
          }
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const WritingsCategory = (categoryName, category) => {
  const pieces = category && category.map((c) => Piece(c));
  return (
    <Fragment key={categoryName}>
      <Typography variant="h6">{categoryName}</Typography>
      {pieces && <List>{pieces}</List>}
    </Fragment>
  );
};

export const Writings = () => {
  const categoryKeys = Object.keys(writings.categories);
  const categories =
    categoryKeys &&
    categoryKeys.map((category) =>
      WritingsCategory(category, writings.categories[category])
    );
  return (
    <div>
      <Typography variant="h4">Writings</Typography>
      {categories && categories}
    </div>
  );
};

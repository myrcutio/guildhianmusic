import React, { Fragment, useEffect, useRef, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import copy from 'copy-to-clipboard';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import kebabCase from 'lodash-es/kebabCase';
import Link from '@material-ui/core/Link';
import LinkIcon from '@material-ui/icons/Link';
import List from '@material-ui/core/List';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import * as writings from './writings.json';
import css from './Writings.module.scss';
import svgs from './svg'

const Piece = (piece) => {
  const {
    title,
    type,
    description,
    svgpath,
  } = piece;
 
  const key = `${title}-${type}`;
  const anchorTitle = kebabCase(title);
  const { origin, pathname, hash } = window.location;
  const [expanded, setExpanded] = useState(hash === `#${anchorTitle}`);
  const [copied, setCopied] = useState('Copy Direct Link');
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

  const onCopyClick = () => {
    copy(`${origin}${pathname}#${anchorTitle}`);
    setCopied('Copied!');
    setTimeout(() => {
      setCopied('Copy Direct Link');
    }, 1500);
  };

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
          {description && (
            <div
              className={css.description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          {svgpath && (
            <img src={svgs[svgpath]}/>
          )}
        </div>
      </AccordionDetails>
    </Accordion>
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

export const Writings = () => {
  const categoryKeys = Object.keys(writings.categories);
  const categories =
    categoryKeys &&
    categoryKeys.map((category) =>
      WorksCategory(category, writings.categories[category])
    );
  return (
    <div>
      <Typography variant="h4">Writings</Typography>
      {categories && categories}
    </div>
  );
};

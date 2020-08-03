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
import * as works from './works.json';
import css from './Works.module.scss';

const Piece = (piece) => {
  const {
    title,
    type,
    instruments,
    duration,
    description,
    publisher,
    movements,
    attribution,
    composerNotes,
    detailLink
  } = piece;
  const key = `${title}-${type}`;
  const anchorTitle = kebabCase(title);
  const allInstruments = instruments && instruments.join(', ');
  const allMovements = movements && movements.join(', ');
  const allComposerNotes = composerNotes && composerNotes.join(', ');
  const hasMoreInfo = !!allInstruments || !!allMovements || !!allComposerNotes;
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
              {detailLink && (
                <Link
                  href={detailLink}
                  target="_blank"
                  title={`View more details about ${title}`}
                  className={css.detailLink}
                  onClick={(e) => e.stopPropagation()}
                  color="textPrimary"
                >
                  <span>{title}</span>
                  <Tooltip title="Opens in new window" placement="top" arrow>
                    <OpenInNewIcon
                      className={css.linkIcon}
                      color="disabled"
                      fontSize="small"
                    />
                  </Tooltip>
                </Link>
              )}
              {!detailLink && (
                <div className={css.detailLink}>
                  <span>{title}</span>
                  <Tooltip title={copied} placement="top" arrow>
                    <IconButton
                      className={css.copyIcon}
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        onCopyClick();
                      }}
                    >
                      <LinkIcon color="disabled" fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </div>
              )}
            </div>
            {type && <div className={css.type}>({type})</div>}
          </div>
          <Typography variant="caption" color="textSecondary">
            {publisher && `Publisher: ${publisher}`}
            {publisher && duration && ` | `}
            {duration && `Duration: ${duration}`}
          </Typography>
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
          {attribution && (
            <Typography
              variant="caption"
              color="textSecondary"
              component="div"
              className={css.attribution}
              dangerouslySetInnerHTML={{ __html: attribution }}
              paragraph
            />
          )}
          {hasMoreInfo && <Divider className={css.divider} />}
          {allComposerNotes && (
            <Fragment>
              <Typography variant="overline" color="textSecondary">
                Composer Notes
              </Typography>
              <div
                className={css.composerNotes}
                dangerouslySetInnerHTML={{ __html: allComposerNotes }}
              />
            </Fragment>
          )}
          {allInstruments && (
            <Fragment>
              <Typography variant="overline" color="textSecondary">
                Instruments
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                {allInstruments}
              </Typography>
            </Fragment>
          )}
          {allMovements && (
            <Fragment>
              <Typography variant="overline" color="textSecondary">
                Movements
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                {allMovements}
              </Typography>
            </Fragment>
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

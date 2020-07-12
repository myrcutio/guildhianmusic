import React from 'react';
import Typography from '@material-ui/core/Typography';
import * as works from './works.json';

const Piece = (piece) => (
    <section>
        <div>{piece.title}</div>
        <div>{piece.type}</div>
        {piece.instruments ? piece.instruments.join(",") : "" }
        <a href={piece.detailLink} target={piece.external ? "_blank" : ""}>Details</a>
    </section>
)

const WorksCategory = (categoryName, category) => (
    <figure className="category">
        <figcaption>{categoryName}</figcaption>
        {category ? category.map(c => Piece(c)) : ""}
    </figure>
);

export const Works = () => (
  <div>
    <Typography variant="h6">Works</Typography>
      {Object.keys(works.categories).map(category => WorksCategory(category, works.categories[category]))}
  </div>
);

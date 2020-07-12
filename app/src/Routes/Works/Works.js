import React from 'react';
import Typography from '@material-ui/core/Typography';
import * as works from './works.json';

const Piece = (piece) => (
    <div>
        <div>{piece.title}</div>
        <div>{piece.type}</div>
        {piece.instruments ? piece.instruments.join(",") : "" }
        <a href={piece.detailLink} target={piece.external ? "_blank" : ""}>Details</a>
    </div>
)

const WorksCategory = (categoryName, category) => (
    <li className="category">
        <div>{categoryName}</div>
        {category ? category.map(c => Piece(c)) : ""}
    </li>
);

export const Works = () => (
  <div>
    <Typography variant="h6">Works</Typography>
      <ul>
        {Object.keys(works.categories).map(category => WorksCategory(category, works.categories[category]))}
      </ul>
  </div>
);

import React from 'react';
import Typography from '@material-ui/core/Typography';
import * as works from './works.json';

const Piece = (piece) => (
    <li key={piece.title + piece.type}>
        <div>{piece.title}</div>
        <div>{piece.type}</div>
        {piece.instruments ? piece.instruments.join(",") : "" }
        <a href={piece.detailLink} target={piece.external ? "_blank" : ""}>Details</a>
    </li>
)

const WorksCategory = (categoryName, category) => (
    <li className="category" key={categoryName}>
        <div>{categoryName}</div>
        <ul>
            {category ? category.map(c => Piece(c)) : ""}
        </ul>
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

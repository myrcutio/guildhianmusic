import React from 'react';
import Typography from '@material-ui/core/Typography';
import * as works from './works.json';

const Piece = (piece) => {
    const key = `${piece.title}-${piece.type}`
    const instruments = piece.instruments && piece.instruments.join(",")
    return (
        <li key={key}>
            <div>{piece.title}</div>
            <div>{piece.type}</div>
            {instruments && (<div>{instruments}</div>)}
            <a href={piece.detailLink} target={piece.external ? "_blank" : ""}>Details</a>
        </li>
    )
}

const WorksCategory = (categoryName, category) => {
    const pieces = category && category.map(c => Piece(c))
    return (
        <li className="category" key={categoryName}>
            <div>{categoryName}</div>
            {pieces && (<ul>{pieces}</ul>)}
        </li>
    );
}

export const Works = () => {
    const categoryKeys = Object.keys(works.categories)
    const categories = categoryKeys && categoryKeys.map(category => WorksCategory(category, works.categories[category]))
    return (
        <div>
            <Typography variant="h6">Works</Typography>
            {categories && (<ul>{categories}</ul>)}
        </div>
    );
}

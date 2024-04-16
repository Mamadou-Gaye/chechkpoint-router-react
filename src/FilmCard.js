import React from 'react';
import { Link } from 'react-router-dom';

const FilmCard = ({ id, title, description, posterURL, rating }) => {
  return (
    <Link to={`/film/${id}`} className="film-card">
      <h2>{title}</h2>
      <img src={posterURL} alt={title} />
      <p>{description}</p>
      <p>Note: {rating}</p>
    </Link>
  );
};

export default FilmCard;
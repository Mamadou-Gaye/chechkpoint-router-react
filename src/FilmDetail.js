import React from 'react';
import { useParams, Link } from 'react-router-dom';

const FilmDetail = () => {
  const { id } = useParams(); // Récupère l'identifiant du film depuis l'URL

  // Supposons que films soit un tableau de films avec des détails complets
  const film = films.find((film) => film.id === id);

  if (!film) {
    return <div>Le film n'a pas été trouvé</div>;
  }

  return (
    <div className="film-detail">
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <div>
        <iframe
          width="560"
          height="315"
          src={film.trailerURL}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Link to="/">Retour à la liste des films</Link>
    </div>
  );
};

export default FilmDetail;
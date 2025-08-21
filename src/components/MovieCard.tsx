
import React from 'react';

interface MovieProps {
  movie: {
    id: number;
    title: string;
    description: string;
    year: number;
  };
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div className="card">
      <h2>{movie.title} ({movie.year})</h2>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieCard;

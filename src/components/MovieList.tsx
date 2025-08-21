import React from 'react';
import MovieCard from './MovieCard';

const movies = [
  { id: 1, title: "Inception", description: "A mind-bending thriller.", year: 2010 },
  { id: 2, title: "Interstellar", description: "Journey through space and time.", year: 2014 },
  { id: 3, title: "The Dark Knight", description: "Batman faces the Joker.", year: 2008 },
];

const MovieList: React.FC = () => {
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

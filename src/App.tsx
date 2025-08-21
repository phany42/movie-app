import React from 'react';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';

const sampleMovie = {
  id: 1,
  title: "Inception",
  description: "A mind-bending thriller by Christopher Nolan.",
  year: 2010,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>🎬 Movie App</h1>
      <MovieCard movie={sampleMovie} />
      <MovieList />
    </div>
  );
};

export default App;


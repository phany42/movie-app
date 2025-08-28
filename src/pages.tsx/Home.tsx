import { moviesData } from "../data/movies";
import { MovieCard } from "../components/MovieCard";


export const Home = () => {
  return (
    <div>
      <h2>All Movies</h2>
      {moviesData.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;

import { movies } from "../services/dummy";
import { MovieCard } from "../components/MovieCard";


const Home = () => {
  return (
    <div>
      <h2>All Movies</h2>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};
export default Home;

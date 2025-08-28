
import { useMovieContext } from "../context.tsx/MovieContext";
import { MovieCard } from "../components/MovieCard";

export const Favorites = () => {
  const { favorites } = useMovieContext();

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#fff", marginTop: "20px" }}>
        Favorites
      </h2>

      {favorites.length > 0 ? (
        <div className="movie-list">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "#aaa" }}>
          No favorites added yet.
        </p>
      )}
    </div>
  );
};

export default Favorites;

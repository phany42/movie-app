
import { useMovieContext } from "../context.tsx/MovieContext";
import type { MovieType } from "../data/movies";

type Props = {
  movie: MovieType;
};

export const MovieCard: React.FC<Props> = ({ movie }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useMovieContext();

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>{movie.year}</p>
      <button
        onClick={() =>
          isFavorite ? removeFromFavorites(movie.id) : addToFavorites(movie)
        }
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default MovieCard;

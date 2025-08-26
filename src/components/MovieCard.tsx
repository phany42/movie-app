import { useMovieContext } from "../context.tsx/MovieContext";
import './MovieCard.css';

interface Props {
  id: number;
  title: string;
  description: string;
  year: number;
}

export const MovieCard: React.FC<Props> = ({ id, title, description, year }) => {
  const { addToFavorites } = useMovieContext();

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{year}</p>
      <button onClick={() => addToFavorites({ id, title, description, year })}>
        Add to Favorites
      </button>
    </div>
  );
};


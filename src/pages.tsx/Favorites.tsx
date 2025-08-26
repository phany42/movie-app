import { useMovieContext } from "../context.tsx/MovieContext"; 
    
import './Favorites.css';

export const Favorites = () => {

  const { favorites, removeFromFavorites } = useMovieContext();


  return (<div className="favorites-page">
  <h2>Favorites</h2>
  {favorites.map((movie) => (
    <div className="favorite-card" key={movie.id}>
      <h3>{movie.title}</h3>
      <button onClick={() => removeFromFavorites(movie.id)}>Remove</button>
    </div>
  ))}
</div>
   
  );
}
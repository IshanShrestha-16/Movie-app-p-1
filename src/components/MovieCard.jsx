import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id); // we will check if the movie is in the favorites state by using the isFavorite function from the MovieContext.

  function onFavoriteClick(e) {
    e.preventDefault(); // we will prevent the default behavior of the button click event.
    if (favorite) {
      removeFromFavorites(movie.id); // if the movie is in the favorites state we will remove it from the favorites state by using the removeFromFavorites function from the MovieContext.
    } else {
      addToFavorites(movie); // if the movie is not in the favorites state we will add it to the favorites state by using the addToFavorites function from the MovieContext.
    }
  }

  
  return (
    <div className="movie-card">
      <div className="movie-poster">

        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function onFavoriteClick(e) {
    alert("Clicked");
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
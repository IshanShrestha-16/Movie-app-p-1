import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const movies = [
    {
      id: 1,
      title: "Inception",
      release_date: "2010-07-16"
    },
    {
      id: 2, // Fixed: Changed from 1 to 2
      title: "The Dark Knight",
      release_date: "2008-07-18"
    }
  ];

  function handleSearch(e) {
    e.preventDefault();
    // Add your search logic here
    console.log("Searching for:", searchQuery);
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
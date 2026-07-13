const API_KEY = "28d10c276b462fcf8d124c9a22ea162f"
const BASE_URL = "https://api.themoviedb.org/3"  // base endpoint URL which send request to the server

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}; //We will send request to the server to get popular movies by using fetch function.

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}; //We will send request to the server to search movies by using fetch function.

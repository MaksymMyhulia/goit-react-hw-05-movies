import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = "80849c20aa63241eb028c4e7b7d0f3a8";

export async function fetchTrendMovies() {
    const responce = await axios.get(`trending/all/day?api_key=${API_KEY}`);
    return responce.data.results;
}
export async function fetchQueryMovies(query) {
    const responce = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    return responce.data.results;
}  
export async function fetchCastMovie(movieId) {
    const responce = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return responce.data.cast;
}
export async function fetchReviewMovie(movieId) {
    const responce = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);
    return responce.data.results;
}
export async function fetchDetailsMovie(movieId) {
    const responce = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`
    );
    return responce.data;
}
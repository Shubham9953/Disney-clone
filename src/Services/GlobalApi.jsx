import axios from "axios";



const MovieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "aeb1c543990245140929caeb6e214d9e"; // apni TMDb API key yahan paste karo

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=aeb1c543990245140929caeb6e214d9e';


const getTrendingVideos = axios.get(
  `${MovieBaseUrl}/trending/movie/day?api_key=${apiKey}`
);

 const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
  getTrendingVideos,
  getMovieByGenreId
};





//aeb1c543990245140929caeb6e214d9e = API Key
//AUTH_TOKEN = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWIxYzU0Mzk5MDI0NTE0MDkyOWNhZWI2ZTIxNGQ5ZSIsIm5iZiI6MTc1NTA3MDg4My40MTIsInN1YiI6IjY4OWM0MWEzMmY3NjBiMTQ5ZDFhMzU1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dqvf79gxnP-XyNiaFJ2-wnE2gSSL-EbUu0UmkGdPEOM
const API_KEY = "007bfc25f21eb93cf93cfcf7fe8fb623";

const requests = {
   fetchTrading:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
   fetchNetflixOriginal :`/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRatedMovies : `/movie/top_rated?${API_KEY}&language=en-us`,
   fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchTvShow : `/discover/movie?api_key=${API_KEY}&with_genres=28`

}

export default requests 

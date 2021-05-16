const API_KEY = '6c1d97c465896a36bf025abce1df38b0';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language-en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks-213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
}

export default requests;

//https://api.themoviedb.org/3/discover/tv?api_key=6c1d97c465896a36bf025abce1df38b0&with_networks-213
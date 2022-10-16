const API_KEY = "763b45462b0d3b155dc9068862cd06ad";

const requests = {
    fetchTrending: `/trending/all/week?api_keys=${API_KEY}&language-en-US`,
    fetchNetflixOriginals: `/discover/tv?api_keys=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_keys=${API_KEY}&language-en-US`,
    fetchActionMovies: `/discover/movie?api_keys=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_keys=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_keys=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_keys=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_keys=${API_KEY}&with_genres=99`,
}

export default requests;
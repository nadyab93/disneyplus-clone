import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='19d054a0353dc456e6cd61726a5f4c5a'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=19d054a0353dc456e6cd61726a5f4c5a';

//https://api.themoviedb.org/3/trending/all/day?api_key=19d054a0353dc456e6cd61726a5f4c5a
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}
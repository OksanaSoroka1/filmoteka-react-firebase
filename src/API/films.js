import axios from "axios";

const API_KEY = 'b6be36a5da27d5ea7b8b28c63f72e28e'
axios.defaults.baseURL = `https://api.themoviedb.org/3/`

// get trendy films
export  const getTrendMovieList =async ( page=1,mediaType='movie',timeWindow='week') => { 
    return await axios.get(`/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}&page=${page}`)
        .then(({data}) => { return data})
}
//get upcoming movies list
export const getUpcomingMovies = async (page=1,region) => { 
    return await axios(`/movie/upcoming?api_key=${API_KEY}&page=${page}`).then(({ data }) => { return data})
}

//get top-rated movies list
export const getTopRatedMovies = async (page=1,region) => { 
    return await axios(`/movie/top_rated?api_key=${API_KEY}&page=${page}`).then(({ data }) => { return data})
}
//get movie by id
export const getMovieById = async(movieId) => { 
    return await axios.get(`/movie/${movieId}?api_key=${API_KEY}`)
        .then(({ data }) => { return data})
}

//search movie by name
export const getMovieByName = async ( page = 1,search, year) => { 
    console.log(year)
    return await axios.get(`/search/movie?api_key=${API_KEY}&query=${search}&page=${page}${year && `&year=${year}` }`)
        .then(({ data }) => {return {results: data.results, pages: data.total_pages } })
}

//get image



//get genres
export const getGenres = async () => { 
    return await axios(`/genre/movie/list?api_key=${API_KEY}`).then(({ data})=>  data.genres)
}


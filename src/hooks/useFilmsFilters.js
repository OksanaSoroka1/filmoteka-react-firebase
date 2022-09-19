import { useState, useEffect } from 'react'
import { getGenres } from '../API/films'
export const useFilmsFilters = () => { 
        const [movieFilters, setMovieFilters] = useState({year:'', genre: ''})
    const [genresList, setGenresList] = useState([])
    useEffect(() => { 
         const setGenres = async () => {
        try {
            const genres = await getGenres();
        setGenresList(genres)
        } catch (error) {
            console.log(error)
        }   
    }
        setGenres();
    }, []) 

 function clearFilter(e) { 
        switch (e.target.id) {
            case 'clearYear':
                setMovieFilters({ genre: movieFilters.genre, year: '' });
                break;
             case 'clearGenre':
                setMovieFilters({ genre: '', year:  movieFilters.year });
                break;
        
            default:
                break;
        }
    }
    return {
        movieFilters,
        genresList,
        setMovieFilters,
        clearFilter
    }
}
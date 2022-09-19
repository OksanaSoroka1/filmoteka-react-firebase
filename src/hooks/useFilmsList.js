import { useState, useEffect } from "react";
import { useLoadingStatus } from "./useLoadingstatus";
import { useLocation } from "react-router-dom";
export const useFilmsList = () => { 
     const [filmsList, setFilmsList] = useState([]);
   
    const [totalPages, setTotalPages] = useState(0);
    const { loadingStatus, setLoadingStatus } = useLoadingStatus();
    const [filteredList, setFilteredList] = useState([]);
    const location = useLocation();
     useEffect(() => {
          setFilteredList(filmsList)
        /* if (!movieFilters.genre) {

            setFilteredList(filmsList)
            return
         }
        const filteredFilms = filmsList.filter(film => {
            return film.genre_ids.includes(Number(movieFilters.genre))
        });
        setFilteredList(filteredFilms) */
     }, [/* movieFilters.genre, */ filmsList])
    
    const setList = async (apiFilms, fetchPage, search, year) => { 
        if (location.state?.fromModal) {return }
         try {
             
             setLoadingStatus('pending')
             const data = await apiFilms(fetchPage, search, year);  
             /*  console.log(data) */
             setLoadingStatus('loaded')
             setFilmsList(data.results)
             data.pages? setTotalPages(data.pages) : setTotalPages(data.total_pages)
             
         } catch (error) {
             setLoadingStatus('error')
                console.log(error)
            }
    }
     
    
    return {
        filmsList,
        filteredList,
        totalPages,
        loadingStatus,
       
        setList,
        setFilteredList
    }
}
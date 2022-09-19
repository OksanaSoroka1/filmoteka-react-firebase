import { SearchForm } from "../../components";
import { useState, useEffect} from 'react'
import { MoviesFilter } from "../../components";
import { getMovieByName } from "../../../API/films";
import { useMemo } from "react";
import { usePageSettings } from "../../../hooks/usePageSettings";
import { FilmsListSection } from "../../sections/FilmsListSection";
import { useFilmsList } from "../../../hooks/useFilmsList";
import { useFilmsFilters } from "../../../hooks/useFilmsFilters";
import { useFetchPage } from "../../../hooks/useFetchPage";
const MoviesPage = () => { 
    const [search, setSearch] = useState('');
    const { fetchPage , setPage} = useFetchPage();
  const {filmsList,filteredList, totalPages, loadingStatus, setList } = useFilmsList()
    const { movieFilters,  setMovieFilters, clearFilter}=useFilmsFilters()
   
   
    
    useEffect(() => {
        if (!search  ) { return}     
        setList(getMovieByName,fetchPage, search, movieFilters.year )
    }, [search, movieFilters.year, fetchPage])

   
    
    const setFilters = (data) => { 
        const { year, genre } = data;
        console.log(data)
        setMovieFilters(data)
    }

   
    
    
    
    function onNewSearch(value) {
        setPage('1');
        setSearch(value);
     }
    return (
        <FilmsListSection filmsList={filteredList}
            totalPages={totalPages}
            
            search={true}
            onSearch={(value) => onNewSearch(value)}
            loadingStatus={ loadingStatus}></FilmsListSection>
        
        /* <StyledSection>
        <SearchForm onHandleSubmit={( value) =>   onNewSearch(value) }></SearchForm>
        <MoviesFilter  genresList={genresList} onFiltersChange={(data) => setFilters(data)}></MoviesFilter>
        {search && (<p>Results on `{search}`</p>) }
        {movieFilters.year && (<div>
            <span>Year: {movieFilters.year}</span>
            <button id='clearYear' type='button' onClick={(e)=>clearFilter(e) }>Clear</button>
        </div>)}
        {movieFilters.genre && (<div>
            <span>Genre: {movieFilters.genre}</span>
            <button id='clearGenre' type='button' onClick={(e)=>clearFilter(e) }>Clear</button>
        </div>)}
        {filteredList.length > 0 && (<ListViewFilters colorTheme={ colorTheme} ></ListViewFilters>)}
        {filteredList.length > 0 && (<FilmList filmsArr={filteredList} colorTheme={ colorTheme} ></FilmList>)}
        {totalPages !== 0 && (<PagesNav totalPages={totalPages} onPageClick={(page) => setFetchPage(page)} search={search}></PagesNav>)
        }
    </StyledSection> */)
}
export default MoviesPage
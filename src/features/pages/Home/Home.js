import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendMovieList, getTopRatedMovies, getUpcomingMovies } from '../../../API/films';
import { FilmsListSection } from '../../sections/FilmsListSection';
import { useFilmsList } from '../../../hooks/useFilmsList';
import { useFetchPage } from '../../../hooks/useFetchPage';
const homePathArr = [{ path: '/trending', title: 'Trending movies' },
  { path: '/top-rated', title: 'Top-rated movies' },
    { path: '/upcoming', title: 'Upcoming movies' }]
  
const HomePage = ({ title }) => { 
    const {filmsList, totalPages, loadingStatus, setList }=useFilmsList()
/*     const [fetchPage, setFetchPage] = useState('1');
 */     const location = useLocation();
    const { fetchPage , setPage} = useFetchPage()
    useEffect(() => { 
        const onNewLocation = () => {
            if (location.state?.fromModal  || location.state?.background || fetchPage==='1') {
                console.log('state from modal')
                 return
            }
            console.log('set 1 page')
         setPage('1') 
        }
        onNewLocation()
       
    },[location])
    useEffect(() => {
       /*  console.log(`fetch page became ${fetchPage} in home`) */
        switch (location.pathname) {
            
            case '/trending':
                setList(getTrendMovieList, fetchPage)
                break;
             case '/top-rated':
                setList(getTopRatedMovies, fetchPage)
                break;
             case '/upcoming':
                setList(getUpcomingMovies, fetchPage)
                break;
        
            default:
                break;
        }     
    }, [location, fetchPage])
    
    return (
        
        <FilmsListSection loadingStatus={loadingStatus}
            title={title}
            filmsList={filmsList}
            pathArr={homePathArr}
            totalPages={totalPages}
            /* setFetchPage={setFetchPage} */></FilmsListSection>
        
    )
}
export default HomePage
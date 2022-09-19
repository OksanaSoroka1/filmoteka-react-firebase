import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import {  getMovieById, getGenres } from '../../../API/films';
import { FilmsListSection } from '../../sections/FilmsListSection';
import { useAuth } from '../../../hooks/useAuth';
import { useUserFilms } from '../../../hooks/useUserFilms';
import { useLoadingStatus } from '../../../hooks/useLoadingstatus';
import { useFetchPage } from '../../../hooks/useFetchPage';
const userFilmsPathArr = [{ path: '/favorites', title: 'Favorites movies' },
  { path: '/watched', title: 'Watched movies' },
    { path: '/wishlist', title: 'Wishlist' }]

const UserFilmsPage = ({ title }) => { 
    const [filmsList, setFilmsList] = useState([])
    const { fetchPage } = useFetchPage();
   /*  const [fetchPage, setFetchPage]= useState('1') */
    const { favorites, watched, wishlist} = useUserFilms()
    let location = useLocation();
    const { loadingStatus, setLoadingStatus } = useLoadingStatus()
    
    const loadFilmsList = (category) => { 
        setLoadingStatus('pending');
        setFilmsList(category.map(film => film.info));
        setLoadingStatus('loaded')
    }
    useEffect(() => {
        switch (location.pathname) {
            case '/favorites':
                loadFilmsList(favorites)
                break
            case '/watched':
                 loadFilmsList(watched)
                break
               
            case '/wishlist':
                 loadFilmsList(wishlist)
                break
        
            default:
                break;
        }
     },[location])
     
    return (
        
        <FilmsListSection loadingStatus={loadingStatus} title={title} filmsList={filmsList} pathArr={userFilmsPathArr} ></FilmsListSection>
    
    )
}
export default UserFilmsPage
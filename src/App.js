import React from 'react';
import './app.css';
import { useAuth } from './hooks/useAuth';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserInfo, getUserFilms } from './firebase/realTimeDB';
import { SiteRoutes } from './features/components/Routes';
import { useUserFilms} from './hooks/useUserFilms'
function App() {
  const { isAuth, id } = useAuth();
  const {setUserFilmsLists, onAddFavoriteFilm} = useUserFilms();
  useEffect(() => { 
    setUserFilmsLists();
  },[isAuth])
 
  
  return (
   
        <SiteRoutes></SiteRoutes>
 
  );
}

export default App;

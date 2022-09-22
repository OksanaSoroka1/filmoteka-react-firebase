import React, {lazy, Suspense, useEffect, useState} from 'react';
import { Routes, Route, useLocation , useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { setModalVisibilitySlct ,  setColorThemeSlct, setListStyleSlct } from '../../store/siteSettings/selectors';
import  Modal from '../components/Modal'
import { SitePage } from './SitePage';
import { PrivateRoute } from '../../hok/private';
import { PageLoader } from './Loader/Loader';
const HomePage = lazy(() => import('../pages/Home/Home'));
const UserFilmsPage = lazy(() => import('../pages/Private'));
const MoviesPage = lazy(() => import('../pages/Movies'));
const LoginPage = lazy(() => import('../pages/Login'));
const SignUpPage = lazy(() => import('../pages/SignUp'));
const FilmInfo = lazy(() => import('../sections/FilmInfo'))


export const SiteRoutes = () => { 
  const location = useLocation();
  const background = location.state && location.state.background;
  
  useEffect(() => {
    console.log('new location',location)
   },[location])
  return (
    /* <PageLoader></PageLoader> */
         <Suspense fallback={<PageLoader></PageLoader>}>
        <Routes location={background || location}>
        <Route path='/' element={ <SitePage></SitePage>}>          
              <Route  path='trending' element={<HomePage title='Trending movies' />}  ></Route>
              <Route path='top-rated' element={<HomePage title='Top-rated movies'/>} ></Route>
              <Route path='upcoming' element={<HomePage title='Upcoming movies' />} ></Route>  

            <Route path='movies' element={<MoviesPage></MoviesPage>} ></Route>
            <Route path='favorites' element={ <PrivateRoute><UserFilmsPage title='Favorites'></UserFilmsPage></PrivateRoute>}></Route>
            <Route path='watched' element={ <PrivateRoute><UserFilmsPage title='Watched'></UserFilmsPage></PrivateRoute>}></Route>
            <Route path='wishlist' element={ <PrivateRoute><UserFilmsPage title='Wishlist'></UserFilmsPage></PrivateRoute>}></Route>

          </Route>
          </Routes>
        {background && (
          <Routes>
            <Route path={`/login`} element={<Modal><LoginPage></LoginPage></Modal>}></Route>
            <Route path={`/signup`} element={<Modal><SignUpPage ></SignUpPage></Modal>}></Route>
            <Route path={`${background.pathname}/:filmId`} element={<Modal><FilmInfo></FilmInfo></Modal>}></Route>
          </Routes> 
        )
          }
          
        </Suspense> )
}
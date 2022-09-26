import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendMovieList, getTopRatedMovies, getUpcomingMovies } from '../../../API/films';
import { StyledSection } from '../../../styles/styledComponents';
import { useFilmsList } from '../../../hooks/useFilmsList';
import { useFetchPage } from '../../../hooks/useFetchPage';

const AboutPage = () => { 
  

    useEffect(() => { 
        
    },[])

    return (<StyledSection>

    </StyledSection>)
}
export default AboutPage;
import styled from 'styled-components';
import { useState, useEffect, useMemo, useLayoutEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { styleVars } from '../../styles/vars';
import { StyledIconButton, StyledSvg } from '../../styles/styledComponents';
import { getMovieById } from '../../API/films';
import { useAuth } from '../../hooks/useAuth';
import { loadFilmInfoToDB } from '../../firebase/realTimeDB';
import { setFilmInfo } from '../../firebase/realTimeDB'; 
import sprite from '../../images/sprite.svg';
import noImage from '../../images/noImage.png';

import { UserAddFilmsBtns } from '../components/UserAddFilmBtns/UserAddFilmsBtns';
const StyledSection = styled.section`
position: relative;
display: flex;
min-width: 620px;
justify-content: space-between;
padding:  50px;
`
const StyledImgWrap = styled.div`
width: 320px;
flex-shrink: 0;
margin-right: 30px;
`
const StyledContent = styled.div`
`
const StyledTitle = styled.h3`
font-size: 38px;
`
const StyledList = styled.ul`
display: ${props => props.genres && 'flex'};
flex-wrap: ${props => props.genres && 'wrap'};
`
const StyledListItem = styled.li`
&:not(:last-child){
    margin-bottom: ${props => props.content && '20px'};
    margin-right: ${props => props.genres && '20px'};
}
`

const StyledText = styled.p`


`


 const FilmInfo = () => { 
     const [film, setFilm] = useState('');
     const [inFavorite, setInFavorite] = useState(false);
     const [inWatched, setInWatched] = useState(false);
     const [inWishList, setInWishList] = useState(false);
     const { isAuth, id } = useAuth();
     const { filmId } = useParams();
     const getFilm = async (id) => { 
        try {
            const film = await getMovieById(id);
            setFilm(film);
        
        } catch (error) {
            console.log(error)
        }
} 
    
    useEffect(() => { 
         getFilm(filmId)
    }, [])
     /* useEffect(() => {
         console.log(film)
      },[film]) */
     
   
     return (<>
         {film &&
             <StyledSection>
                 <StyledImgWrap>
            <img src={film.poster_path? `https://image.tmdb.org/t/p/original${film.poster_path}` : noImage}></img>
        </StyledImgWrap>
        <StyledContent>
            <StyledTitle>{film.title}</StyledTitle>
                     <StyledList content={ true}>
                <StyledListItem content={ true}>
                    <StyledText date={ true}>Release date: {film.release_date}</StyledText>
                </StyledListItem>
                <StyledListItem content={ true}>
                    <StyledText>Genres:</StyledText>
                <StyledList genres={ true}>
                                 {film.genres.map(item => (<StyledListItem key={item.id } genres><StyledText  id={item.id}>{item.name }</StyledText></StyledListItem>)) }
            </StyledList>
                </StyledListItem>
                <StyledListItem content={ true}>
                    <StyledText rate={ true}>Rate: {film.vote_average }</StyledText>
                         </StyledListItem>
                         {film.overview && 
                         <StyledListItem content={ true}>
                    <StyledText overview={ true}>Overview:{ film.overview}</StyledText>
                </StyledListItem>}
                
            </StyledList>  
            
        </StyledContent>
                 <UserAddFilmsBtns film={ film}></UserAddFilmsBtns>  
             </StyledSection>     
         }
    
     </>
         
        
         
     )
}
export default FilmInfo
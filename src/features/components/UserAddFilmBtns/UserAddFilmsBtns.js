import styled from 'styled-components';
import { useState, useEffect, useMemo, useLayoutEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { styleVars } from '../../../styles/vars';
import { StyledIconButton, StyledSvg } from '../../../styles/styledComponents';
import { useAuth } from '../../../hooks/useAuth';
import sprite from '../../../images/sprite.svg';
import { setFilmInfo, deleteFilmInfo } from '../../../firebase/realTimeDB'; 
import { useUserFilms } from '../../../hooks/useUserFilms';
import { setFavorite, setWatched, setWishlist, removeFromFavorite, removeFromWatched, removeFromWishlist } from '../../../store/userFilms/reducers';

const StyledBtnWrap = styled.ul`
position: absolute;
right: 0;
top: 30%;
z-index: 1002;
display: flex;
flex-direction: column;

`
const StyledBtn = styled(StyledIconButton)`

/* fill: ${(inList) =>  inList===true? styleVars.fontColors.accentFirst: styleVars.fontColors.primary };
 */
`

export const UserAddFilmsBtns = ({ film}) => { 
     const { isAuth, id } = useAuth();
    const {favorites, watched, wishlist, /* onFilmAddedToDB */ } = useUserFilms()
    
    const dispatch = useDispatch();
    const toggleFilm = async (uid, film, category, filmsList, removeFunc, addFunc) => { 
        const {inList, key} = filterId(filmsList, film.id);  
            console.log('key',key)
            console.log(inList)
        if (inList === true) {
            try {
                await deleteFilmInfo(uid, key, category)
                /* console.log('film deleted') */
                dispatch(removeFunc(key))
                /* console.log('deleted from store') */
                return
            } catch (error) {
                console.log(error)
            }
        }
        else {
            try {
              const newKey =  await setFilmInfo(uid, film, category)
               /*  console.log('film added')
                console.log('key addded', newKey) */
                dispatch(addFunc([{key: newKey, info: film}]))
                
            } catch (error) {
                console.log(error)
            }
         }
            
    }

    function filterId(filmsList, filmId) { 
        const filmsIdArr = filmsList.map(film => film.info.id)
        const inList = filmsIdArr.includes(filmId);
        if (inList === true) {
            const film = filmsList.find(film => film.info.id === filmId)
            const key = film.key;
            return {inList, key}
         }

        return {inList} 
    }

   async function onBtnClick(e) { 
        if (!isAuth) {
             //notification
             console.log('not auth')
             return
         }
    switch ( e.currentTarget.id) {
        case 'favorites':   
            toggleFilm(id, film, e.currentTarget.id, favorites, removeFromFavorite, setFavorite)
            break;
        case 'watched':
           
            toggleFilm(id, film, e.currentTarget.id, watched, removeFromWatched, setWatched)
            break;
        case 'wishlist':
             toggleFilm(id, film, e.currentTarget.id, wishlist, removeFromWishlist, setWishlist)

            break;
    
        default:
            break;
    }
    }
    function setBtnFill(category, filmId) { 
        return {fill: filterId(category, filmId).inList===true? styleVars.fontColors.accentFirst: styleVars.fontColors.primary}
    }
    return ( <StyledBtnWrap>
                     <li btn={ true}>
            <StyledBtn onClick={onBtnClick} style={setBtnFill(favorites, film.id)} id='favorites' type='button'><StyledSvg ><use href={`${sprite}#icon-heart` }></use></StyledSvg></StyledBtn>
                     </li>
                     <li btn={ true}>
                         <StyledBtn onClick={onBtnClick } style={setBtnFill(watched, film.id)}  id='watched' type='button'><StyledSvg ><use href={`${sprite}#icon-ApproveTick` }></use></StyledSvg></StyledBtn>
                     </li>
                     <li btn={ true}>
                         <StyledBtn onClick={onBtnClick } style={setBtnFill(wishlist, film.id)}  id='wishlist' type='button'><StyledSvg ><use href={`${sprite}#icon-Plus` }></use></StyledSvg></StyledBtn>
                     </li>
        </StyledBtnWrap>)
}
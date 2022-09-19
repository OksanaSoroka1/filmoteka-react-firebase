import styled from 'styled-components';
import { StyledIconButton, StyledSvg } from '../../styles/styledComponents';
import sprite from '../../images/sprite.svg';
import { styleVars } from '../../styles/vars';
import { useState, useEffect} from 'react'
import { getTrendMovieList } from '../../API/films';
const StyledFilterContainer = styled.div`
display: flex;

`
const StyledText = styled.p`
font-size: 24px;
/* color: ${styleVars.fontColors.primary}; */
margin-right: 15px;
`
const StyledArrowBtn = styled(StyledIconButton)`
width: 30px;
height: 30px;
fill: inherit;
`

export const MoviesFilter = ({ genresList, onFiltersChange}) => { 
    const [filterVisibility, setFilterVisibility] = useState(false);
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');

  /*   useEffect(() => { 
 onFiltersChange({year,genre});
    }, [year,genre]) */
    
    const onHandleSubmit = (e) => { 
        e.preventDefault();
        onFiltersChange({year,genre});
        
    }
    const onHandleChange = (e) => { 
        switch (e.target.name) {
            case 'year':
                setYear(e.target.value)
                break;
            case 'genre':
                setGenre(e.target.value)
                break;
            default:
                break;
        }
    }
    const date = new Date();
    const currentYear = date.getFullYear()
    return (<StyledFilterContainer>
        <StyledText>Filter</StyledText>
        <StyledArrowBtn type='button' onClick={() => setFilterVisibility(!filterVisibility)}>
            <StyledSvg><use href={`${sprite}#icon-right-arrow`}></use></StyledSvg>
        </StyledArrowBtn>
        {filterVisibility && (<form onSubmit={(e)=> onHandleSubmit(e)}>
            <label>
                Year
                <input type='number' min='1900' max={currentYear} step='1' name='year'  placeholder='Year' onChange={(e)=>onHandleChange(e) }></input>
            </label>
            <label for='genre'></label>
            <select id='genre' name='genre'  onChange={(e)=>onHandleChange(e) }>
                <option value='Genre' hidden>Genre</option>
                {genresList?.map(genre => (<option value={genre.id} id={genre.id}>{genre.name }</option>)) }
            </select>
            <button type='submit'>Search</button>
        </form>)}
    </StyledFilterContainer>)
}
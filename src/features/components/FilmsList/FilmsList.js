import styled from 'styled-components';
import { FilmCard } from './FilmCard';
import { usePageSettings } from '../../../hooks/usePageSettings';
import { useEffect } from 'react';
import { ListViewFilters } from '../Home/ListFilters';
const StyledListBlock = styled.div`

`
const StyledList = styled.ul`
display: grid;
grid-template-columns: ${(props) => props.listStyle === 'grid' ? 'repeat(auto-fill, minmax(235px, auto))' : '1fr'};
grid-auto-rows: ${(props)=> props.listStyle === 'grid'? 'minmax(300px, auto)': 'minmax(320px, auto)'};
grid-gap: 25px;
`


export const FilmList = ({ filmsArr, colorTheme, listView }) => { 
    
    const { listStyle } = usePageSettings();
    return (
        <StyledListBlock>
            <ListViewFilters colorTheme={colorTheme} listView={ listView}></ListViewFilters>
            <StyledList listStyle={listStyle}>
        {filmsArr?.map((item) => <FilmCard key={item.id} id={item.id} name={item.title} overview={item.overview } liststyle={listStyle} date={item.release_date}  poster={ item.poster_path}></FilmCard>)}
    </StyledList>
        </StyledListBlock>
        )
}

import { FilmList } from '../components';
import { SectionHeader } from '../components/Home';
import { StyledSection } from '../../styles/styledComponents';
import { PagesNav } from '../components/PagesNav/PagesNav';
import { usePageSettings } from '../../hooks/usePageSettings';
import { ListLoader } from '../components/Loader/Loader';
export const FilmsListSection = ({filmsList,  title, pathArr, totalPages, setFetchPage, search, onSearch, loadingStatus}) => { 
    const { colorTheme , listStyle} = usePageSettings();
   return (
            <StyledSection>
           <SectionHeader title={title} pathArr={pathArr} colorTheme={colorTheme} search={search} onSearch={onSearch }></SectionHeader>
           {loadingStatus==='pending' && <ListLoader></ListLoader>  }
           {loadingStatus === 'loaded' && filmsList.length > 0 && <FilmList filmsArr={filmsList} colorTheme={colorTheme} listView={listStyle}></FilmList>}    
           
           {loadingStatus==='loaded' && totalPages !== 0 && (<PagesNav totalPages={totalPages} /* onPageClick={setFetchPage} */ ></PagesNav>)
        }
        </StyledSection>       
    )
}

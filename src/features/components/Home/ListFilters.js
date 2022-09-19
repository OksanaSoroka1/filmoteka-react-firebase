import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { StyledIconButton , StyledSvg} from '../../../styles/styledComponents';
import { styleVars } from '../../../styles/vars';
import sprite from '../../../images/sprite.svg';
import { setListStyle } from '../../../store/siteSettings/reducers';

const StyledListViewWrapper = styled.div`
display: flex;
justify-content: end;
align-items: center;
margin-bottom: 25px;
`

const StyledListViewBtn = styled(StyledIconButton)`
width: 24px;
height: 24px;

fill: ${(props)=> props.colorTheme === 'light'? styleVars.fontColors.primary: styleVars.fontColors.secondary};
&:hover, &:focus{
    fill: ${(props)=> props.colorTheme === 'light'? styleVars.fontColors.accentSecond: styleVars.fontColors.accentFirst};
}

`
export const ListViewFilters = ({ listView, colorTheme}) => { 
    const dispatch = useDispatch();
    const setListView = (e) => { 
        const view = e.currentTarget.getAttribute(['data-view'])
        dispatch(setListStyle(view))
    }
    return (
        <StyledListViewWrapper>
            {listView === 'grid' ? (
                <StyledListViewBtn colorTheme={colorTheme} onClick={(e) => setListView(e)} type='button' data-view='list'><StyledSvg><use href={`${sprite}#icon-list-format`}></use></StyledSvg></StyledListViewBtn>)
                : (<StyledListViewBtn colorTheme={colorTheme} onClick={(e) => setListView(e)} type='button' data-view='grid'><StyledSvg><use href={`${sprite}#icon-grid`} ></use></StyledSvg></StyledListViewBtn>)} 
        </StyledListViewWrapper>
            )
}
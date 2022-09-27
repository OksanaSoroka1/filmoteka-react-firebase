import styled from 'styled-components';
import { styleVars } from '../../../styles/vars';
import { useState, useMemo ,useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFetchPage } from '../../../store/fetchPage/reducers';
import { useFetchPage } from '../../../hooks/useFetchPage';

const StyledEl = styled.button`
background-color: transparent;
color: ${props=> props.content?.toString() === props.fetchPage? styleVars.fontColors.accentFirst : 'inherit'} ; 
font-size: 25px;
cursor: pointer;
border: none;
transition: color 300ms ${styleVars.animation.ease};
&:hover, &:focus{
  color: ${styleVars.fontColors.accentFirst};
}
`

export const PagesNavEl = ({ content, value }) => {
  const dispatch = useDispatch();
  const { fetchPage } = useFetchPage();
  const location = useLocation();

  const setPage = (page) => {
    location.state = null;
        dispatch(setFetchPage(page))
     }

    return (
      <StyledEl key={`${content}_${value}`} fetchPage={fetchPage} content={ content}
       type='button' value={value} onClick={(e) => { setPage(e.target.value) }} >{content}</StyledEl>
  )  
 }
import styled from 'styled-components';
import { styleVars } from '../../../styles/vars';
import {  StyledIconButton, StyledSvg } from '../../../styles/styledComponents';
import sprite from '../../../images/sprite.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const StyledNextBtn = styled(StyledIconButton)`
width: 45px;
height: 45px;
position: relative;
fill: inherit;
&:hover, &:focus{
  fill: ${(props) => props.colorTheme === 'light' ? styleVars.fontColors.accentSecond : styleVars.fontColors.accentFirst};  
}
`

const StyledNextTitle = styled.span`
position: absolute;
top: 100%;
left: -50%;
min-width: 300%;
font-size: 16px;
color:  ${props => props.colorTheme === 'light' ? styleVars.fontColors.primary : styleVars.fontColors.secondary};
text-align: start;
border-radius: ${styleVars.borders.radius};

`


export const NextTitleBtn = ({ colorTheme, title, pathArr}) => { 
  const [nextTitle, setNextTitle] = useState('');
  const [nextTitleVisibility, setNextTitleVisibility]=useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  let currentPath = pathArr.find((item) => item.path === location.pathname);
    const currentIndex = pathArr.indexOf(currentPath)
  const openNextPage = (arr) => { 
    if (currentIndex === arr.length - 1) {
      navigate(arr[0].path);
      return
    }
    navigate(arr[currentIndex+1].path)
  }
  const showNextTitle = (arr) => { 
    if (currentIndex === arr.length - 1) { 
      setNextTitle(arr[0].title);
      setNextTitleVisibility(true)
      return 
    }
    setNextTitle(arr[currentIndex + 1].title);
    setNextTitleVisibility(true);
  }
    return (
         
        <StyledNextBtn colorTheme={colorTheme} type='button' onMouseOut={()=>setNextTitleVisibility(false)} onMouseOver={()=> showNextTitle(pathArr)} onClick={() => openNextPage(pathArr)}>
          <StyledSvg><use href={`${sprite}#icon-right-arrow`}></use></StyledSvg>
          {nextTitleVisibility && <StyledNextTitle colorTheme={colorTheme}>{nextTitle}</StyledNextTitle> }
        </StyledNextBtn>
        
    )
}
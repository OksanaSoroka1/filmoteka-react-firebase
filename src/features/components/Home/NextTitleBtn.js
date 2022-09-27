import styled from 'styled-components';
import { styleVars } from '../../../styles/vars';
import {  StyledIconButton, StyledSvg } from '../../../styles/styledComponents';
import sprite from '../../../images/sprite.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
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

// enter from
  &.fade-enter {
    opacity: 0;
   
  }

  // enter to
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ${styleVars.animation.ease};
  }

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to 
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ${styleVars.animation.ease};
  }
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
        {<CSSTransition in={nextTitleVisibility} timeout={300}  classNames="fade" unmountOnExit={ true}>
            <StyledNextTitle colorTheme={colorTheme}>{nextTitle}</StyledNextTitle>
        </CSSTransition>
          }
        </StyledNextBtn>
        
    )
}
import styled from "styled-components";
import { StyledIconButton, StyledSvg } from "../../../styles/styledComponents";
import sprite from '../../../images/sprite.svg';
import { styleVars } from "../../../styles/vars";
const StyledLogout = styled.span`
display: flex;
align-items: center;
color: inherit;
cursor: pointer;
&:hover, &:focus{
    color: ${styleVars.fontColors.accentFirst};
    fill: ${styleVars.fontColors.accentFirst};
}
`
const StyledSvgWrap = styled.span`
height: 2.7rem;
width: 2.7rem;
fill: inherit;
`
export const Logout = ({ onLogOut}) => { 
    return (
        <StyledLogout onClick={onLogOut}>Log Out <StyledSvgWrap><StyledSvg><use href={`${sprite}#icon-Logout`}></use></StyledSvg></StyledSvgWrap> </StyledLogout>)
}
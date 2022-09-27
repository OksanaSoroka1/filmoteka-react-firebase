import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { styleVars } from './vars'
//page
/* export const StyledPage = styled.div`
width: 100vw;
min-height: 100vh;
display: grid;
grid-template-rows: minmax(100px, auto)  auto minmax(75px, auto);
` */
//container
export const StyledContainer = styled.div`
margin-left: auto;
margin-right: auto;
padding: 0 30px;
max-width: 1600px;
height: 100%;

display: ${props=> props.flex && 'flex'};
 align-items: ${props=> props.flex && 'center'};
 
`

//section 
export const StyledSection = styled.section`
display: grid;
min-height: 100%;
padding: 50px ;
grid-gap: 25px;
`


//nav header
export const StyledNavList = styled.ul`
display: flex;
align-items: center;
height: 100%;
/* justify-content: ${props=> props.site && 'start'}; */
`
export const StyledNavListEl = styled.li`
height: 100%;

`
export const StyledNavLink = styled(NavLink)`
position: relative;
font-family: ${styleVars.fontFamily.secondary};
/* font-size: 30px; */
color: inherit;
height: 100%;
width: 100%;
display: flex;
align-items: center;
cursor: pointer;
transition: color 300ms ${styleVars.animation.ease} ;
&:hover, &:focus{
  color: ${styleVars.fontColors.accentFirst}; 
}
&.active{
color: ${styleVars.fontColors.accentFirst};
}
`
//button
export const StyledButton = styled.button`

`
//svg
export const StyledSvg = styled.svg`
width: 100%;
height: 100%;
`
//button icon
export const StyledIconButton = styled.button`
width: 2.7rem;
height: 2.7rem;
border: none;
background-color: transparent;
/* height: 100%; */
display: flex;
align-items: center;
fill: ${styleVars.fontColors.secondary};
padding: 0;
cursor: pointer;
transition: fill 300ms ${styleVars.animation.ease} ;
&:hover, &:focus{
    fill: ${styleVars.fontColors.accentFirst};
}
`
//menu
export const StyledMenuItem = styled.li`
min-height: 3rem;
border-bottom: ${styleVars.borders.menuBorder};
display: flex;
align-items: center;
padding-left: 1rem;
 &:hover, &:focus{
  border-bottom: ${styleVars.borders.menuBorderActive};
  box-shadow: ${styleVars.shadows.menuActive};
}
`

//auth form
export const StyledAuthForm = styled.form`
min-height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;


`
export const StyledAuthLabel = styled.label`
display: flex;
flex-direction: column;
font-size: 25px;
width: 100%;
/* &:only-child:active{
  color: ${styleVars.fontColors.accentSecond}
} */
`
export const StyledAuthInput = styled.input`
width: 100%;
height: 40px;
margin-top: 10px;
padding: 5px 10px;
font-size: 20px;
border-radius: ${styleVars.borders.radius};
border: ${styleVars.borders.filterBorder};
outline: none;
&:hover, &:focus, &:active{
  border: ${styleVars.borders.filterBorderActive};
}

`
export const StyledAuthBtn = styled.button`
width: 200px;
height: 55px;
display: flex;
align-items: center;
justify-content: center;
border-radius: ${styleVars.borders.radius};

border: none;
background-color: ${styleVars.bcgColors.accentFirst};
color: ${styleVars.fontColors.secondary};
font-size: 25px;
cursor: pointer;
/* transition: ; */
&:hover, &:focus{
  box-shadow: ${styleVars.shadows.buttonHover};
  color: ${styleVars.fontColors.accentFirst}
}
`
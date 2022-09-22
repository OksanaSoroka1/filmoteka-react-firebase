import styled from "styled-components";
import { useEffect, useState } from "react";
import { StyledNavLink, StyledNavList, StyledNavListEl, StyledSvg , StyledIconButton} from "../../../styles/styledComponents";
import sprite from '../../../images/sprite.svg';
import { styleVars } from "../../../styles/vars";
import { useDispatch, useSelector } from "react-redux";
import { setModalVisibility } from "../../../store/siteSettings/reducers";
import { useLocation } from "react-router-dom";
const StyledAuth = styled(StyledNavList)`
display: flex;
align-items: center;
margin-right: 1.7rem;
`
const StyledAuthListEl = styled(StyledNavListEl)`
&:first-child{
   display: flex;
    margin-right: 0.75rem;
    &::after{
        content:'/';
        color: ${styleVars.fontColors.secondary};
        margin-left: 0.75rem;
        align-self: center;
    }
}
`
export const AuthNav = () => { 
    const [btnVisibility, setBtnVisibility] = useState(true);
    const dispatch = useDispatch();
    let location = useLocation();
    useEffect(() => { 
        ( location.pathname===`/login` ||  location.pathname===`/signup`) && setBtnVisibility(true)
    },[location])
    const showIcon = () => {    
        setTimeout(()=> setBtnVisibility(true), 20000)
    }
    return (<StyledAuth>
        {btnVisibility ? (
            <StyledIconButton type="button" onClick={()=> setBtnVisibility(false) }>
            <StyledSvg><use href={`${sprite}#icon-add-account`}></use></StyledSvg>
            </StyledIconButton>) : 
            (<StyledNavList onMouseOut={()=>showIcon()}>
                <StyledAuthListEl><StyledNavLink to={`/login`} onClick={() => dispatch(setModalVisibility(true))} state={{background: location}}>LogIn</StyledNavLink></StyledAuthListEl>
        <StyledAuthListEl><StyledNavLink to={`/signup`} onClick={()=>dispatch(setModalVisibility(true))} state={{background: location}} >SignUp</StyledNavLink></StyledAuthListEl>
        
        </StyledNavList>
        ) }
        
        
        
    </StyledAuth>)
}
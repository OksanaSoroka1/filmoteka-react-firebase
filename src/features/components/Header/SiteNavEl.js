import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation} from 'react-router-dom'
import { StyledNavLink , StyledNavListEl, StyledSvg, StyledIconButton} from "../../../styles/styledComponents";
import { DropdownMenu } from "../DropdownMenu";
import  sprite from '../../../images/sprite.svg'
import { useDropdownVisibility } from "../../../hooks/useDropdownVisibility";
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import { duration, defaultStyle, transitionStyles } from "../../../styles/transitions";

const StyledSiteNavEl = styled(StyledNavListEl)`
position: relative;
padding: 0 4%;
&:nth-child(1){
    margin-right: 5%;
}

`

export const SiteNavEl = ({linkName , path, menuList, children}) => {
    const {visibility, setVisibility, closeMenu }=useDropdownVisibility()
    const nodeRef = useRef(null);
    function onNavLinkClick(e) { 
        if (linkName === 'Home') {
            e.preventDefault();
            setVisibility(!visibility)
         }
    }
    return (
        <StyledSiteNavEl   >
            <StyledNavLink  onClick={onNavLinkClick}
                to={path}
                onMouseOut={closeMenu}>{linkName} {children} </StyledNavLink>
            {menuList?.length > 0 /* && visibility */ && (
                <CSSTransition in={visibility} timeout={300}  classNames="fade" unmountOnExit={ true}>
                    {() => (
                        <DropdownMenu id='home-nav'
                            menuList={menuList}
                            >       
                        </DropdownMenu>
                    )}
                </CSSTransition>
                
                    ) }
        </StyledSiteNavEl>
    )
 }
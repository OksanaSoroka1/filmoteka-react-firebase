import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation} from 'react-router-dom'
import { StyledNavLink , StyledNavListEl, StyledSvg, StyledIconButton} from "../../../styles/styledComponents";
import { DropdownMenu } from "../DropdownMenu";
import  sprite from '../../../images/sprite.svg'
import { useDropdownVisibility } from "../../../hooks/useDropdownVisibility";


const StyledSiteNavEl = styled(StyledNavListEl)`
position: relative;
padding: 0 4%;
&:nth-child(1){
    margin-right: 5%;
}

`

export const SiteNavEl = ({linkName , path, menuList, children}) => {
    const {visibility, setVisibility, closeMenu }=useDropdownVisibility()
   
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
                    {menuList?.length>0 && visibility && (
                <DropdownMenu id='home-nav'
                    menuList={menuList}>       
                </DropdownMenu>
                    ) }
        </StyledSiteNavEl>
    )
 }
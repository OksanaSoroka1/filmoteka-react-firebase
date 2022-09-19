import styled from "styled-components";
import { StyledNavList } from "../../../styles/styledComponents";
import { SiteNavEl } from "./SiteNavEl";
import { SiteLogo } from "./SiteLogo";
const StiledSiteNav = styled.nav`
flex-grow: 2;
`


const homeMenu = [{linkName: 'Trending', path: '/trending'}, {linkName: 'Top-rated', path: '/top-rated'}, {linkName: 'Upcoming', path: '/upcoming'}]

export const SiteNav = () => { 
   
    return (
        <StiledSiteNav>
            <StyledNavList site>
               <SiteLogo path='/'></SiteLogo>
                <SiteNavEl  path='/' linkName='Home' menuList={homeMenu}></SiteNavEl>
                <SiteNavEl path='/movies' linkName='Movies' ></SiteNavEl>
                
            </StyledNavList>
        </StiledSiteNav>)
} 
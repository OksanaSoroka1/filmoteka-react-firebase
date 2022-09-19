import styled from "styled-components";
import { SiteNavEl } from "./SiteNavEl";
import { styleVars } from "../../../styles/vars";



const StyledPageTitle = styled.h1`
font-size: 55px;
font-weight: normal;
color: transparent;
 background-image: ${styleVars.bcgColors.logoLinear};
 -webkit-background-clip: text;
`

export const SiteLogo = ({ path}) => { 
   
    return (
        <SiteNavEl path={ path} ><StyledPageTitle>Filmoteka</StyledPageTitle></SiteNavEl>
              )
} 
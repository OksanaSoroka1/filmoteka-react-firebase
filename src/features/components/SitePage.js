import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledContainer} from '../../styles/styledComponents';
import { styleVars } from '../../styles/vars';
import {  setColorThemeSlct, setListStyleSlct } from '../../store/siteSettings/selectors';
import { Header } from './Header';
import { Footer } from './Footer';

import { useEffect, useMemo } from 'react';

 const StyledPage = styled.div`
width: 100vw;
min-height: 100vh;
display: grid;
grid-template-rows: 140px  auto 90px;
`
const StyledMain = styled.main`
background: ${(props) => props.colorTheme === 'light' ? styleVars.bcgColors.pageLinearLight : styleVars.bcgColors.pageLinearDark};
color: ${props => props.colorTheme === 'light' ? styleVars.fontColors.primary : styleVars.fontColors.secondary};
fill: ${props => props.colorTheme === 'light' ? styleVars.fontColors.primary : styleVars.fontColors.secondary};

`


export const SitePage = () => {    
    const colorTheme = useSelector(setColorThemeSlct);
    
    return (<StyledPage>
        <Header></Header>
        <StyledMain colorTheme={colorTheme}>
            <StyledContainer>
                <Outlet ></Outlet>  
            </StyledContainer>           
        </StyledMain>
        <Footer></Footer> 
        
    </StyledPage>)
}

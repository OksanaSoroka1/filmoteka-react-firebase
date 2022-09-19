import styled from 'styled-components';
import { styleVars } from '../../../styles/vars';
import { StyledContainer } from '../../../styles/styledComponents';
import { SiteNav } from './SiteNav';
import { AuthNav } from './AuthNav';
import { UserInfo } from './UserInfo';
import { ColorThemeBtn } from './ColorTheme';
import { useAuth } from '../../../hooks/useAuth';

const StyledHeader = styled.header`
font-size: 30px;
background-color: ${styleVars.bcgColors.accentFirst};
color: ${styleVars.fontColors.secondary};
fill:  ${styleVars.fontColors.secondary};
`

export const Header = () => { 
    const {isAuth} = useAuth();
    
    return (<StyledHeader>
        <StyledContainer flex={ true}>           
            <SiteNav ></SiteNav>
            {isAuth ? <UserInfo ></UserInfo>: <AuthNav></AuthNav> }
            <ColorThemeBtn></ColorThemeBtn>
        </StyledContainer>
        
    </StyledHeader>)
}
import styled from "styled-components";
import { StyledContainer } from "../../styles/styledComponents";
import { styleVars } from "../../styles/vars";


const StyledFooter = styled.footer`
 background-color: ${styleVars.bcgColors.dark};
 `
const StyledFooterSpan = styled.span`
font-size: 16px;
 color: ${styleVars.fontColors.secondary};

 &:first-child{
    margin-right: 10px;
 }
 &:nth-child(2){
    margin-right: 25px;
 }
 `
const StyledContent = styled.div`
padding-left: 110px;

`
export const Footer = () => { 
    return (<StyledFooter>
        <StyledContainer flex={ true}>
            <StyledContent>
            <StyledFooterSpan>&#xa9;</StyledFooterSpan>
            <StyledFooterSpan>2022</StyledFooterSpan>
                <StyledFooterSpan>All Rights Reserved</StyledFooterSpan></StyledContent>
        </StyledContainer>
        
    </StyledFooter>)
}
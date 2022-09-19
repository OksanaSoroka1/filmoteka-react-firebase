import styled from 'styled-components';
import { styleVars } from '../../../styles/vars';
import {  StyledIconButton, StyledSvg } from '../../../styles/styledComponents';

import { NextTitleBtn } from './NextTitleBtn';
import { SearchForm } from '../Search';

 const StyledSectionHeader = styled.div`


`
const StyledTitleBlock = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`
const StyledTitle = styled.h1`
font-size: 50px;

`



export const SectionHeader = ({ colorTheme ,title , pathArr, search, onSearch}) => { 
 
    return (
        <StyledSectionHeader>
           {title && (<StyledTitleBlock>
                <StyledTitle>{title}</StyledTitle>
                <NextTitleBtn colorTheme={ colorTheme} pathArr={ pathArr}></NextTitleBtn>
            </StyledTitleBlock>)}
            {search && (
            <SearchForm onHandleSubmit={onSearch}></SearchForm>

            ) }

                    
                </StyledSectionHeader>
    )
}
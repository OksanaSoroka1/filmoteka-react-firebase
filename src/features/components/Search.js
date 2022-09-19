import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { styleVars } from '../../styles/vars';
import { StyledSvg, StyledIconButton } from '../../styles/styledComponents';
import sprite from '../../images/sprite.svg'
const StyledForm = styled.form`

position: relative;
height:55px;
width: 615px;
margin: 0 auto;
`
const StyledLabel = styled.label`
width: 100%;
`
const StyledSearchInput = styled.input`
width: 100%;
border-radius: ${styleVars.borders.radius};
border: ${styleVars.borders.searchBorder};
padding:  14px 25px;
outline: none;
&::placeholder{
    font-size: 24px;
    color: ${styleVars.fontColors.placeholder};
}
`
const StyledSubmitBtn = styled(StyledIconButton)`
position: absolute;
top: 12px;
right: 22px;
width: 32px;
height: 32px;
fill: ${styleVars.fontColors.accentSecond};
`
export const SearchForm = ({onHandleSubmit }) => { 
    const [search, setSearch] = useState('');
   
    const onFormSubmit = (e, search) => { 
        e.preventDefault();
        onHandleSubmit(search);
        setSearch('')
    }
    return (<StyledForm onSubmit={(e) => onFormSubmit(e, search) }>
        <StyledLabel>
            <StyledSearchInput name='film-search' value={search} onChange={(e) => setSearch(e.target.value)}  placeholder='Search...'></StyledSearchInput>
        </StyledLabel>
        <StyledSubmitBtn type='submit'><StyledSvg><use href={`${sprite}#icon-Research`}></use></StyledSvg></StyledSubmitBtn>
    </StyledForm>)
}
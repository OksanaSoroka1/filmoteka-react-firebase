import styled from 'styled-components';
import { styleVars } from '../../../styles/vars';
import sprite from '../../../images/sprite.svg';
import { useState , useEffect} from 'react';
import { StyledAuthForm, StyledAuthLabel, StyledAuthInput, StyledAuthBtn } from '../../../styles/styledComponents';

export  const AuthInput = ({ name, type, onHandleChange}) => { 
const [value, setValue]=useState('')
    useEffect(() => {
        onHandleChange(value)
    }, [value])
    
    return (
        <StyledAuthLabel>
            { name}
            <StyledAuthInput type={type} id={name} name={name} value={value} onChange={(e) => setValue(e.target.value) }></StyledAuthInput>
        </StyledAuthLabel>
    )       
    
}

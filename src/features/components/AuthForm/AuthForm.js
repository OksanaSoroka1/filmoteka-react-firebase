import styled from 'styled-components';
import { styleVars } from '../../../styles/vars';
import sprite from '../../../images/sprite.svg';
import { useState } from 'react';
import { StyledAuthForm, StyledAuthLabel, StyledAuthInput, StyledAuthBtn } from '../../../styles/styledComponents';
import { AuthInput } from './AuthInput';
const AuthForm = ({name, sendData }) => { 
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onHandleSubmit = (e) => { 
        e.preventDefault();
        sendData({userName, email, password})
    }
    return (<StyledAuthForm name={name} onSubmit={(e)=> onHandleSubmit(e) }>
        {name === 'SignUp' && <AuthInput name='Name' type='text' onHandleChange={ (value)=> setUserName(value)}></AuthInput>}
        <AuthInput name='Email' type='email' onHandleChange={ (value)=> setEmail(value)}></AuthInput>
        <AuthInput name='Password' type='password' onHandleChange={ (value)=> setPassword(value)}></AuthInput>
        <StyledAuthBtn type='submit'>{ name}</StyledAuthBtn>
    
    </StyledAuthForm>)
}
export  {AuthForm}
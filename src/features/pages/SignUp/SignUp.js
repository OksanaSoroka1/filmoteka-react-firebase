import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { setUser } from '../../../store/auth/redusers';
import { AuthForm } from '../../components/AuthForm';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { loadUserInfoToDB } from '../../../firebase/realTimeDB';
import { signUp } from '../../../firebase/auth';
const SignUpPage = () => { 
     const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
  
    async function onHandleSignUp(data) { 
        const { email, password, userName } = data;
        
       
        try {
            const user = await signUp(email, password, userName)
            
            dispatch(setUser({
                email: user.email,
                token: user.accessToken,
                id: user.uid,
                name: user.displayName
            }));
        
          loadUserInfoToDB(user.uid, email, userName)
              
            navigate(location.state?.background )
       } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;          
       }
  
    }

    return (<>
        <AuthForm name='SignUp' sendData={ onHandleSignUp}></AuthForm>
        <p>Already a member? <Link to='/login' state={{background: location.state?.background}}>Login</Link></p>
    </>)
}
export default SignUpPage
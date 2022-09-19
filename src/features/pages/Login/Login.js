import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { useState } from 'react';
import { setUser } from '../../../store/auth/redusers';
import { AuthForm } from '../../components/AuthForm';
import { Link } from 'react-router-dom';
import { useLocation , useNavigate} from 'react-router-dom';
import { login } from '../../../firebase/auth';
const LoginPage = () => { 
    const dispatch = useDispatch();
    const location = useLocation();
  const navigate = useNavigate();
  
   async function onHandleLogin(data) { 
        const { email, password } = data;
        try {
           const user = await login(email, password)
            
        console.log('user', user)
        

            dispatch(setUser({
                email: user.email,
                token: user.accessToken,
                id: user.uid,
                name: user.displayName
            }))

          navigate(location.state?.background)
        }
        catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;          
       }
  
    }
    return (<>
        <AuthForm name='Login' sendData={onHandleLogin }></AuthForm>
        <p>Not a member? <Link to='/signup' state={{background: location.state?.background}}>SignUp</Link></p>
    </>)
}
export default LoginPage
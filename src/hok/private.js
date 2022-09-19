import { useState, useEffect } from 'react';
import {  useLocation , useNavigate, Navigate} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PrivateRoute = ({ children }) => { 
    const location = useLocation();
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    return isAuth ? children : <Navigate to='/login' state={{ background: {pathname: '/'} }}></Navigate>  
}
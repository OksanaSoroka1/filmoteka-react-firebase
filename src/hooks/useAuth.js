import { useSelector } from "react-redux";
import { setUserEmailSlct, setUserIdSlct, setUserTokenSlct } from "../store/auth/selectors";
export const useAuth = () => { 
    const email = useSelector(setUserEmailSlct);
    const token = useSelector(setUserTokenSlct);
    const id = useSelector(setUserIdSlct);
    return {
        isAuth: !!token,
        email,
        token,
        id
    }

}
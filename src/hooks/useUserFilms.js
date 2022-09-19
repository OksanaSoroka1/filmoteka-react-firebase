import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "./useAuth";
import { getUserFilms, onAddFilm} from "../firebase/realTimeDB";
import { setFavorite, setWatched, setWishlist } from "../store/userFilms/reducers";
import { setFavoriteSlct, setWatchedSlct, setWishlistSlct } from "../store/userFilms/selectors";

export const useUserFilms = () => { 
    const favorites = useSelector(setFavoriteSlct);
    const watched = useSelector(setWatchedSlct);
    const wishlist = useSelector(setWishlistSlct)
    const { isAuth, id } = useAuth();
    const dispatch = useDispatch();

    
    const setUserFilmsLists = async () => { 
        if (!isAuth) { return }
        try {
            const favoriteFilms = await getUserFilms(id, 'favorites');
            const watchedFilms = await getUserFilms(id, 'watched');
            const wishlistFilms = await getUserFilms(id, 'wishlist');
           /*  console.log('favoriteFilms', favoriteFilms)
            console.log('watchedFilms', watchedFilms)
            console.log('wishlistFilms', wishlistFilms) */
           
            if (favoriteFilms.length > 0) {
                
                dispatch(setFavorite(favoriteFilms))
            }
            if (watchedFilms.length > 0) { dispatch(setWatched(watchedFilms)) }
            if (wishlistFilms.length > 0) {dispatch(setWishlist(wishlistFilms)) }
               
        } catch (error) {
            console.log(error)
        }
    }
   
   
    /* onAddFilm(id, 'favorite', (film) => dispatch(setFavorite(film))) */
   /*  onAddFilm(id, 'watched', (film) => dispatch(setWatched(film)))
    onAddFilm(id, 'wishlist', (film) => dispatch(setWishlist(film)))  */
    
    
    return {
        favorites,
        watched, 
        wishlist,
        setUserFilmsLists,
        
    }
}
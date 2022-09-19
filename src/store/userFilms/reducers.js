import { createSlice } from "@reduxjs/toolkit";


export const filterSameId = (category, payload) => { 
if (category.length > 0) {
                const categoryKeys = category.map(film => film.key)
                const payloadKeys = payload.map(film => film.key)
                const sameKey = categoryKeys.some(id => payloadKeys.includes(id))
                if (sameKey) {
                    /* console.log('sameId', sameKey) */
                    return category
                }
                else {
                  /*   console.log('reducer works category > 0') */
                    return [...category, ...payload]
                }
                
            }
            else {
               /*  console.log('reducer works category < 0') */
           return [...payload]
             }
}


const userFilmsSlice = createSlice({
    name: 'userFilms',
    initialState: {
        favorites: [],
        watched: [],
        wishlist:[],
    },
    reducers: {
        setFavorite(state, { payload }) {
          state.favorites =  filterSameId(state.favorites, payload)
        },
        setWatched(state, {payload}) { state.watched =  filterSameId(state.watched, payload)},
        setWishlist(state, { payload }) { state.wishlist = filterSameId(state.wishlist, payload) },
        removeFromFavorite(state, { payload }) { state.favorites = state.favorites.filter(film=> film.key !== payload)},
        removeFromWatched(state, { payload }) { state.watched = state.watched.filter(film=> film.key !== payload)},
        removeFromWishlist(state, { payload }) { state.wishlist = state.wishlist.filter(film=> film.key !== payload)},
        removeUserLists(state) { state.favorites = []; state.watched = []; state.wishlist = [] }
    }

})
export const {setFavorite, setWatched, setWishlist, removeUserLists, removeFromFavorite, removeFromWatched, removeFromWishlist} = userFilmsSlice.actions;
export default userFilmsSlice.reducer;
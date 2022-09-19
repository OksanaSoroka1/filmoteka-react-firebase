import { getDatabase, ref, set , get, child , push, update,remove, onValue, onChildAdded, onChildRemoved } from "firebase/database";
/* import { app } from "./firebase"; */

const database = getDatabase();

export const loadUserInfoToDB = async(userId, email, name) => { 
    await set(ref(database, 'users/' + userId), {
    })
    await push(child(ref(database, 'users/' + userId), '/userInfo'), {
         userId,
         email,
        name,
    })
    await push(child(ref(database, 'users/' + userId), '/films'))
}
export const setFilmInfo = async (uid, film, category) => { 
     /*  const filmData = {
        id: film.id
    } */
   
    const newPostKey = push(child(ref(database, 'users/' + uid+ '/films' + category ), '/film' )).key;
   
  // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
     updates['/film' + newPostKey] = film;
  /* updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData; */

    update(ref(database, 'users/' + uid + '/films' + '/' + category), updates);
     return newPostKey
}
export const deleteFilmInfo = async (uid, key, category) => { 
    const dbRef = ref(database, `users/${uid}/films/${category}/${key}`)
    
    return remove(dbRef)

}

export const getUserInfo = async (userId ) => { 
    const dbRef = ref(database);
    try {
        const snapshot = await get(child(dbRef, `users/${userId}`));

        if (snapshot.exists()) {
            console.log(snapshot.val());

        } else {
            console.log("No data available");
        }
    } catch (error) {
         console.error(error);
    }      
}

export const getUserFilms = async (userId, category) => { 
    const dbRef = ref(database, `users/${userId}/films/${category}`)
    const arr = [];
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
        snapshot.forEach((film) => {
            arr.push({info: film.val(), key: film.key})
    })
     }
    return arr
   
}

export const onAddFilm = async (userId, category, addChildCallback) => { 
    const dbRef = ref(database, `users/${userId}/films/${category}`);
    onChildAdded(dbRef, (data) => {
        console.log(`add film to ${category}`,Array.of(data.val()) )
        addChildCallback(Array.of(data.val()))
     })
}

/* export const getUserFilms = async (userId) => {
 
       const dbRef = ref(database, `users/${userId}/films`)
    onValue(dbRef, (snapshot) => {
        console.log(snapshot)
        const favoritesArr = [];
        const watchedArr = [];
        const wishlistArr = [];
        snapshot.forEach((child) => {
            const key = child.key
            const value = child.val()
            
            child.forEach((film) => { 
                switch (child.key) {
                    case 'favorite':
                        console.log('favorite')
                        favoritesArr.push(film.val())
                        break;
                    case 'watched':
                        console.log('watched')
                        watchedArr.push(film.val())
                        break;
                    case 'wishlist':
                        console.log('wishlist')
                        wishlistArr.push(film.val())
                        break;
                
                    default:
                        break;
                }            
            })           
        })
        
        console.log('favoritesArr', favoritesArr)
                console.log('watchedArr',watchedArr)
                console.log('wishlistArr',wishlistArr)

})
 
   
 } */
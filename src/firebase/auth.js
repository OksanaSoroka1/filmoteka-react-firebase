import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";


const auth = getAuth();
 
export const login = async(email, password) => { 
 await signInWithEmailAndPassword(auth, email, password)
      return  auth.currentUser     
}

export const signUp = async (email, password, userName) => { 
 await createUserWithEmailAndPassword(auth, email, password)
             await updateProfile(auth.currentUser, {
                 displayName: userName
                }) 
             
        
    console.log('user', auth.currentUser)
    return auth.currentUser
}
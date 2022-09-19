import { configureStore, combineReducers , getDefaultMiddleware} from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import siteSettings from './siteSettings/reducers';
import user from './auth/redusers';
import userFilms from './userFilms/reducers';
import fetchPage from './fetchPage/reducers'
const settingsPersistConfig = {
  key: 'siteSettings',
  storage,
}
const userPersistConfig = {
  key: 'user',
  storage,
}

const rootReducer = combineReducers({
  siteSettings: persistReducer(settingsPersistConfig, siteSettings),
  user: persistReducer(userPersistConfig, user),
  userFilms,
  fetchPage
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
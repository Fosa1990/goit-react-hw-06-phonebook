import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contactsReducer';
import { createLogger } from 'redux-logger';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const middleware = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

const logger = createLogger({
  predicate: () => process.env.NODE_ENV !== 'production',
  colors: {
    title: action => 'orange',
    prevState: prevState => 'cyan',
    action: action => 'violet',
    nextState: nextState => 'lawngreen',
    error: (error, prevState) => 'red',
  },
});

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === !!'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(middleware).concat(logger),
});

export const persistor = persistStore(store);

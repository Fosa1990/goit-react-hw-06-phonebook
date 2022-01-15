import { combineReducers } from '@reduxjs/toolkit';
import { items } from './items/contactsItemsSlice';
import { filter } from './filter/contactsFilterSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsReducer = combineReducers({ items, filter });

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
});

export default rootReducer;

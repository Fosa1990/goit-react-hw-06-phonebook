import { combineReducers } from '@reduxjs/toolkit';
import { items } from './items/contactsItemsSlice';
import { filter } from './filter/contactsFilterSlice';

export default combineReducers({ items, filter });

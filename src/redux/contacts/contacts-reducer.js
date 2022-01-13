import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, addFilter } from './contacts-action';
import initialState from './contacts-state';

const items = createReducer(initialState.contacts.items, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer(initialState.contacts.filter, {
  [addFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });

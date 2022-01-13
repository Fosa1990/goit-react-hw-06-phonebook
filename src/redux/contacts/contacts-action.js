import {
  ADD_CONTACT,
  DELETE_CONTACT,
  ADD_FILTER,
  CLEAR_FILTER,
} from './contacts-types';

export const addContact = (id, name, phone) => ({
  type: ADD_CONTACT,
  payload: { id, name, phone },
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: { id },
});

export const addFilter = text => ({
  type: ADD_FILTER,
  payload: { text },
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});

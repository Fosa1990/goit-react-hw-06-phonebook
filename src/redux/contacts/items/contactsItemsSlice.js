import { createSlice } from '@reduxjs/toolkit';
import initialState from '../state/contactsState';
import { nanoid } from 'nanoid';

export const contactsItemsSlice = createSlice({
  name: 'items',
  initialState: initialState.contacts.items,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => [payload, ...state],
      prepare: (name, number) => ({
        payload: { id: nanoid(), name, number },
      }),
    },
    deleteContact: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

export const items = contactsItemsSlice.reducer;
export const { addContact, deleteContact } = contactsItemsSlice.actions;

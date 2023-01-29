import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    createContact (state, action) {
      state.contacts.push({
        ...action.payload,
        isFavourite: false,
        id: uuidv4(),
      });
    },
    deleteContact (state, action) {
      state.contacts = state.contacts.filter(c => c.id !== action.payload);
    },
    // payload: id   or   payload:{id, newData}
  },
});

const { reducer, actions } = contactsSlice;

export const { createContact, deleteContact } = actions;

export default reducer;

// CRUD

// reducer(state, action) => state

// createContact(v) => {type: 'contacts/createContact', payload: v}

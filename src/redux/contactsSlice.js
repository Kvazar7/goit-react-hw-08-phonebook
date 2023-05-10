import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from 'redux/services';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  
  extraReducers: builder => {
    builder
    .addCase(getContacts.fulfilled, (state, { payload }) => {
      state.items = payload
    })

    .addCase(addContact.fulfilled, (state, { payload }) => {
      state.items.push(payload)
    })

    .addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.items = state.items.filter(
        contact => contact.id !== payload.id
      )
    })

    .addMatcher(action => action.type.endsWith('/pending'), handlePending)
    .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
    .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
  }
});

export const contactsReducer = contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { getContacts, addContact, deleteContact } from './services';

// const contactsInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   extraReducers: {
//     [getContacts.pending]: handlePending,
//     [addContact.pending]: handlePending,
//     [deleteContact.pending]: handlePending,
//     [getContacts.rejected]: handleRejected,
//     [addContact.rejected]: handleRejected,
//     [deleteContact.rejected]: handleRejected,
//     [getContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
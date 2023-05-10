import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const filteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        if (!contacts) return;
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
);

// export const getContacts = state => state.contacts.items;
// export const getFilter = state => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;


// export const getVisibleContacts = state => {
//     const filter = getFilter(state);
//     const contacts = getContacts(state);
//     const normalizedFilter = filter.toLocaleLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
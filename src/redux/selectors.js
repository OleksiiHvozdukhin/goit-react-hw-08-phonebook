import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filters;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.isLoading;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    console.log('123');
    const visibleContacts = contacts.filter(contact => {
      if (
        filter &&
        !contact.name.toLowerCase().includes(filter.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
    return visibleContacts.reverse();
  }
);

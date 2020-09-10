import { createSelector } from 'reselect';

export const usersListSelector = state => state.users.usersList;
export const filterTextSelector = state => state.users.filterText;

export const filterListSelector = createSelector(
  [usersListSelector, filterTextSelector],
  (users, text) => !text
    ? users
    : users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
);
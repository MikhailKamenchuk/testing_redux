export const CHANGE_FILTER_TEXT = 'USERS/CHANGE_FILTER_TEXT';

export const changeFilterText = filterText => {
  return {
    type: CHANGE_FILTER_TEXT,
    payload: {
      filterText
    }
  }
}
import { SET_CURRENT_PAGE } from './currentPage.actions';

export const currentPageReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return action.payload.currentPage  
    default:
      return state
  }
}
import {SHOW_SPINNER, USER_DATA_RECIEVED} from './users.actions';

const initialState = {
  userData: null,
  isFetching: false
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true
      }
    case USER_DATA_RECIEVED:
      return {
        ...state,
        isFetching: false,
        userData: action.payload.userData
      }
    default:
      return state;
  }
}
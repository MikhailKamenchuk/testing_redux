import { ADD_USER, DELETE_USER} from './users.actions';

const initialState = {
  usersList: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: [
          ...state.usersList,
          action.userData
        ]
      }
    case DELETE_USER:

      return {
        ...state,
        usersList: state.usersList.filter(({id}) => id !== action.id)
      }
    default:
      return state;
  }
}
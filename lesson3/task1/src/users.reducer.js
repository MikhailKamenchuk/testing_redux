import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initialState = {
  usersList: []
}

export const usersReducer = (state = initialState, action) => {
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
        usersList: state.usersList.filter(({ id }) => id !== action.id)
      }
    case UPDATE_USER:
      return {
        ...state,
        usersList: state.usersList.map(user => {
          
          if(user.id === action.payload.id){
            return {
              ...user,
              ...action.payload.userData
            }
          }
          return user
        })
      }
    default:
      return state;
  }
}
export const SET_USER = 'USER/SET_USER';
export const REMOVE_USER = 'USER/REMOVE_USER';

export const setUser = userData => {
  return {
    type: SET_USER,
    payload: {
      userData
    }
  }
}

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  }
}

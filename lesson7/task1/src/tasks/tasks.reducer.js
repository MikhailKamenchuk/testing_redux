import {SHOW_SPINNER, TASKS_DATA_RECIEVED} from './tasks.actions';

const initialState = {
  tasksList: [],
  isFetching: false
}

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true
      }
    case TASKS_DATA_RECIEVED:
      return {
        ...state,
        isFetching: false,
        tasksList: action.payload.tasksData
      }
    default:
      return state;
  }
}
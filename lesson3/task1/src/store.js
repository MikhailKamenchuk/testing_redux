import { createStore, combineReducers } from "redux";
import { usersReducer } from './users.reducer';
import { counterReducer } from './counter.reducer';

const reducer = combineReducers({
  counter: counterReducer,
  users: usersReducer
})

const store = createStore(reducer);

export default store


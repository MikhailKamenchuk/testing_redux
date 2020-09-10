import { createStore, combineReducers } from "redux";
import { usersReducer } from './users.reducer';
import { currentPageReducer } from './currentPage.reducer';

const reducer = combineReducers({
  users: usersReducer,
  currentPage: currentPageReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store


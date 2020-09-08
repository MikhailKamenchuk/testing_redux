import { createStore, combineReducers } from "redux";
import { userReducer } from './user.reducer';
import { languageReducer } from './language.reducer';
import { cartReducer } from './cart.reducer';


const reducer = combineReducers({
  cart: cartReducer,
  language: languageReducer,
  user: userReducer
})

const store = createStore(reducer);

export default store


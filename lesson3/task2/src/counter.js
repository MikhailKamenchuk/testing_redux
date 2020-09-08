import { createStore } from "redux";

export const increment = () => {
  return {
    type: 'COUNTER/INCREMENT'
  }
}

export const decrement = () => {
  return {
    type: 'COUNTER/DECREMENT'
  }
}

export const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

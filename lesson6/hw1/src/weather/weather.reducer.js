import {SHOW_SPINNER, WEATHER_DATA_RECIEVED} from './weather.actions';

const initialState = {
  cityes: [],
  isFetching: false
}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true
      }
    case WEATHER_DATA_RECIEVED:
      return {
        ...state,
        isFetching: false,
        cityes: action.payload.cityes
      }
    default:
      return state;
  }
}
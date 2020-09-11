import { fetchWeatherData } from './weather.gateway';

export const SHOW_SPINNER = 'WEATHER/SHOW_SPINNER';
export const WEATHER_DATA_RECIEVED = 'WEATHER/WEATHER_DATA_RECIEVED';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER
  }
}

export const weatherDataRecieved = cityes => {
  return {
    type: WEATHER_DATA_RECIEVED,
    payload: {
      cityes
    }
  }
}

export const getWeatherData = () => {
  return dispatch => {
    dispatch(showSpinner())
    fetchWeatherData()
      .then(cityes => dispatch(weatherDataRecieved(cityes)))
  }
}
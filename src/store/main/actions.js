import {
  GET_WEATHER_START,
  GET_CURRENT_WEATHER_SUCCESS,
  GET_CURRENT_WEATHER_FAILED,
  GET_FUTURE_WEATHER_SUCCESS,
  GET_FUTURE_WEATHER_FAILED
} from './actionTypes';

export const getWeatherStart = coords => ({
  type: GET_WEATHER_START,
  coords,
});

export const getCurrentWeather = (currentWeather)=> {
  return {
    type: GET_CURRENT_WEATHER_SUCCESS,
    currentWeather
  }
};

export const getFutureWeather = (futureWeather) => {
  return {
    type: GET_FUTURE_WEATHER_SUCCESS,
    futureWeather
  }
};

export const getCurrentWeatherFailure = (currentWeatherFailure) => {
  return {
    type: GET_CURRENT_WEATHER_FAILED,
    currentWeatherFailure
  }
};

export const getFutureWeatherFailure = (futureWeatherFailure) => {
  return {
    type: GET_FUTURE_WEATHER_FAILED,
    futureWeatherFailure
  }
};
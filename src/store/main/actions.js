import {
  GET_CURRENT_WEATHER,
  GET_FUTURE_WEATHER,
  GET_WEATHER_START,
} from './actionTypes';

export const getWeatherStart = coords => ({
  type: GET_WEATHER_START,
  coords,
});

export const getCurrentWeather = (currentWeather)=> {
  return {
    type: GET_CURRENT_WEATHER,
    currentWeather
  }
};

export const getFutureWeather = (futureWeather) => {
  return {
    type: GET_FUTURE_WEATHER,
    futureWeather
  }
};

export const getCurrentWeatherFailure = (currentWeatherFailure) => {
  return {
    type: GET_FUTURE_WEATHER,
    currentWeatherFailure
  }
};

export const getFutureWeatherFailure = (futureWeatherFailure) => {
  return {
    type: GET_FUTURE_WEATHER,
    futureWeatherFailure
  }
};
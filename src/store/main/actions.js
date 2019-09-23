import {
  GET_CURRENT_WEATHER,
  GET_FUTURE_WEATHER,
  GET_WEATHER_START,
} from './actionTypes';

export const getWeatherStart = coords => ({
  type: GET_WEATHER_START,
  coords,
});

export const getCurrentWeather = (coords)=> {
  return {
    type: GET_CURRENT_WEATHER,
    coords
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
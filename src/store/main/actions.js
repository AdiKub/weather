import {
  GET_CURRENT_WEATHER_START,
  GET_CURRENT_WEATHER_SUCCESS,
  GET_FUTURE_WEATHER_START,
  GET_FUTURE_WEATHER_SUCCESS,
  GET_CURRENT_WEATHER_FAILED
} from './actionTypes';

export const getCurrentWeatherStart = ()=> {
  return {
    type: GET_CURRENT_WEATHER_START
  }
};

export const getCurrentWeatherSuccess = (currentWeather) => {
  return {
    type: GET_CURRENT_WEATHER_SUCCESS,
    currentWeather
  }
};

export const getFutureWeatherSuccess = (futureSuccess) => {
  return {
    type: GET_FUTURE_WEATHER_SUCCESS,
    futureSuccess
  }
};
export const getCurrentWeatherFailed = (error) => {
  return {
    type: GET_CURRENT_WEATHER_FAILED,
    error
  }
};
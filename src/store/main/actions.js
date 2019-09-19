import {
  GET_CURRENT_WEATHER,
  GET_FUTURE_WEATHER,
} from './actionTypes';

export const getCurrentWeather = (coords)=> {
  return {
    type: GET_CURRENT_WEATHER,
    coords
  }
};

export const getFutureWeather = (futureSuccess) => {
  return {
    type: GET_FUTURE_WEATHER,
    futureSuccess
  }
};

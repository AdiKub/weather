import {
  GET_CURRENT_WEATHER_SUCCESS,
  GET_FUTURE_WEATHER_SUCCESS,
  GET_CURRENT_WEATHER_FAILED
} from './actionTypes';

const initialState = {
  currentWeather: {},
  futureWeather: {},
  error: ''
};
const main = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        currentWeather: action.currentWeather
      });
    case GET_FUTURE_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        futureWeather: action.futureWeather
      });
    case GET_CURRENT_WEATHER_FAILED:
      return Object.assign({}, state, {
        error: action.e
      });
    default:
      return state
  }
};

export default main;
import {
  GET_CURRENT_WEATHER,
  GET_FUTURE_WEATHER,
} from './actionTypes';
import { initialState } from './selectors';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER:
      console.log(action.currentWeather)
      return {
        ...state,
        currentWeather: action.currentWeather
      };
    case GET_FUTURE_WEATHER:
      return {
        ...state,
        futureWeather: action.futureWeather
      };
    default:
      return state
  }
};

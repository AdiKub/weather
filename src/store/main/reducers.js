import { GET_CURRENT_WEATHER, GET_FUTURE_WEATHER } from './actionTypes';
import { initialState } from './selectors';

const main = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER:
      return Object.assign({}, state, {
        currentWeatherStore: action.currentWeather
      })
    case GET_FUTURE_WEATHER:
      return Object.assign({}, state, {
        futureWeatherStore: action.futureWeather
      })
    default:
      return state
  }
};

export default main;
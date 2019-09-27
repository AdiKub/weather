import { GET_CURRENT_WEATHER_SUCCESS, GET_FUTURE_WEATHER_SUCCESS, GET_FUTURE_WEATHER_FAILED, GET_CURRENT_WEATHER_FAILED } from './actionTypes';
import { initialState } from './selectors';

const main = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        currentWeatherStore: action.currentWeather
      })
    case GET_FUTURE_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        futureWeatherStore: action.futureWeather
      })
    case GET_CURRENT_WEATHER_FAILED:
      return Object.assign({}, state, {
        currentWeatherFailureStore: action.currentWeatherFailure
      })
    case GET_FUTURE_WEATHER_FAILED:
      return Object.assign({}, state, {
        futureWeatherFailureStore: action.futureWeatherFailure
      })
    default:
      return state
  }
};

export default main;
import { GET_CURRENT_WEATHER, GET_FUTURE_WEATHER } from './actionTypes';

const initialState = {
  currentWeather: {},
  futureWeather: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER:
      console.log(initialState, 'reducer')
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

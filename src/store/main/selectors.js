import futureWeather from '../../assets/futureWeather.json'
import currentWeather from '../../assets/currentWeather.json'

export const initialState = {
    currentWeatherStore: currentWeather,
    futureWeatherStore: futureWeather,
    currentWeatherFailureStore: {},
    futureWeatherFailureStore: {}
  };
  
export const getState = (state = initialState) => state || initialState;
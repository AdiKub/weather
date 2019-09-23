export const initialState = {
    currentWeatherStore: {},
    futureWeatherStore: {},
  };
  
export const getState = (state = initialState) => state || initialState;
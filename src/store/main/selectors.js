
export const initialState = {
    currentWeather: {},
    futureWeather: {}
}

export const getState = ( state = initialState ) => state || initialState;
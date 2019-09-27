export const initialState = {
    currentWeatherStore: {
      "coord": {
        "lon": 74.61,
        "lat": 42.88
      },
      "weather": [
        {
          "id": "",
          "main": "",
          "description": "",
          "icon": "01d"
        }
      ],
      "base": "",
      "main": {
        "temp": 273
      },
      "visibility": 0,
      "wind": {
      },
      "clouds": {
      },
      "dt": 0,
      "sys": {
      },
      "timezone": 0,
      "id": 0,
      "name": ""
    },
    futureWeatherStore: {
      "cnt": 40,
      "list": [],
      "city": {
        "id": 1528675,
        "name": "Bishkek",
        "coord": {
          "lat": 42.8767,
          "lon": 74.607
        },
        "country": "KG",
        "population": 0,
        "timezone": 0,
        "sunrise": 0,
        "sunset": 0
      }
    },
    currentWeatherFailureStore: {},
    futureWeatherFailureStore: {}
  };
  
export const getState = (state = initialState) => state || initialState;
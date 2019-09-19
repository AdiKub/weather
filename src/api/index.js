import axios from 'axios';

export const currentWeatherRequest = (coords) => {
  console.log(coords, 'current')
  return axios.get('https://api.openweathermap.org/data/2.5/weather?q=Bishkek,kg&APPID=9d22f5f2810d0f9c846aa17dedf3c42d')
    .then(response => response.data)
    .catch(error => {
      console.log("error");
    });
};

export const futureWeatherRequest = (coords) => {
  console.log(coords, 'future')
  return axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Bishkek,kg&APPID=9d22f5f2810d0f9c846aa17dedf3c42d')
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
};

//https://api.openweathermap.org/data/2.5/weather?q=Bishkek,kg&APPID=9d22f5f2810d0f9c846aa17dedf3c42d
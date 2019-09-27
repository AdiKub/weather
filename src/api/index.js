import axios from 'axios';

export const currentWeatherRequest = (coords) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&APPID=9d22f5f2810d0f9c846aa17dedf3c42d`)
    .then(response => response.data)
    .catch(error => false);
};    

export const futureWeatherRequest = (coords) => {
   return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&APPID=9d22f5f2810d0f9c846aa17dedf3c42d`)
    .then(response => response.data)
    .catch(error => false);
};
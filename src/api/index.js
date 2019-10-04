import axios from 'axios';

const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export const currentWeatherRequest = (coords) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&APPID=${WEATHER_API_KEY}`)
    .then(response => response.data)
    .catch(error => false);
};    

export const futureWeatherRequest = (coords) => {
   return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&APPID=${WEATHER_API_KEY}`)
    .then(response => response.data)
    .catch(error => false);
};
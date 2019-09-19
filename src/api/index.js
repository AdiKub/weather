import axios from 'axios';

export const currentWeatherRequest = (coords) => {
  axios.get('https://api.openweathermap.org/data/2.5/weather?q=Bishkek,kg&APPID=9d22f5f2810d0f9c846aa17dedf3c42d')
    .then(response => response)
    .catch(error => {
      console.log("error");
    });
};
export const futureWeatherRequest = (cityId) => {
  axios.get('')
    .then(response => 'future')
    .catch(error => {
      console.log(error);
    });
};

//https://api.openweathermap.org/data/2.5/weather?q=Bishkek,kg&APPID=9d22f5f2810d0f9c846aa17dedf3c42d
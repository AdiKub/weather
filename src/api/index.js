import axios from 'axios';

export const currentWeatherRequest = (cityId) => {
  axios.get('')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}
export const futureWeatherRequest = (cityId) => {
  axios.get('')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}
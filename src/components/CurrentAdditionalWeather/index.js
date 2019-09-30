import React from 'react';
import moment from 'moment'

import './styles.scss';

const CurrentAdditionalWeather = (props) => {
  const { currentWeatherStore } = props;
  const sunrise = moment(currentWeatherStore.sys.sunrise*1000).format('HH:mm');
  const sunset = moment(currentWeatherStore.sys.sunset*1000).format('HH:mm');
 
  return (
    <div className='current-additional-weather'>
      <div className='current-additional-weather-list'>
        <span className='current-additional-weather-list_name'>
          Wind:
        </span>
        <span className='current-additional-weather-list_item'>
          {currentWeatherStore.wind.speed} m/s
        </span>
      </div>
      <div className='current-additional-weather-list'>
        <span className='current-additional-weather-list_name'>
          Cloudiness:
        </span>
        <span className='current-additional-weather-list_item'>
          {currentWeatherStore.clouds.all} %  {currentWeatherStore.weather[0].description}
        </span>
      </div>
      <div className='current-additional-weather-list'>
        <span className='current-additional-weather-list_name'>
          Pressure:
        </span>
        <span className='current-additional-weather-list_item'>
          {currentWeatherStore.main.pressure} hpa
        </span>
      </div>
      <div className='current-additional-weather-list'>
        <span className='current-additional-weather-list_name'>
          Humidity:
        </span>
        <span className='current-additional-weather-list_item'>
          {currentWeatherStore.main.humidity} %
        </span>
      </div>
      <div className='current-additional-weather-list'>
        <span className='current-additional-weather-list_name'>
          Sunrise:
        </span>
        <span className='current-additional-weather-list_item'>
          {sunrise}
        </span>
      </div>
      <div className='current-additional-weather-list'>
        <span className='current-additional-weather-list_name'>
          Sunset:
        </span>
        <span className='current-additional-weather-list_item'>
          {sunset}
        </span>
      </div>
    </div>
  )
}
export default CurrentAdditionalWeather;

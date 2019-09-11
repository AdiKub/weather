import React from 'react';

import './styles.scss';
import weather from '../../city.json';

const CurrentAdditionalWeather = () => {

  const getTime=(unix)=>{
    const hour = new Date(unix*1000).getHours()
    const min = new Date(unix*1000).getMinutes()
    return hour+' : '+min
  }

  return (
    <div className='current-additional-weather'>
      <div className='current-additional-weather-list'>
        <span className='current-additional-weather-list_name'>
          Wind:
        </span>
        <span className='current-additional-weather-list_item'>
          {weather.wind.speed} m/s
        </span>
      </div>
      <div className='current-additional-weather-list'>
        <span className='current-additional-weather-list_name'>
          Cloudiness:
        </span>
        <span className='current-additional-weather-list_item'>
          {weather.clouds.all} %  {weather.weather[0].description}
        </span>
      </div>
      <div className='current-additional-weather-list'>
        <span className='current-additional-weather-list_name'>
          Pressure:
        </span>
        <span className='current-additional-weather-list_item'>
          {weather.main.pressure} hpa
        </span>
      </div>
      <div className='current-additional-weather-list'>
        <span className='current-additional-weather-list_name'>
          Humidity:
        </span>
        <span className='current-additional-weather-list_item'>
          {weather.main.humidity} %
        </span>
      </div>
      <div className='current-additional-weather-list'>
        <span className='current-additional-weather-list_name'>
          Sunrise:
        </span>
        <span className='current-additional-weather-list_item'>
          {getTime(weather.sys.sunrise)}
        </span>
      </div>
      <div className='current-additional-weather-list'>
        <span className='current-additional-weather-list_name'>
          Sunset:
        </span>
        <span className='current-additional-weather-list_item'>
          {getTime(weather.sys.sunset)}
        </span>
      </div>
    </div>
  )
}
export default CurrentAdditionalWeather;

import React from 'react';
import moment from 'moment'
import './styles.scss';

const CurrentMainWeather = (props) => {
  const { currentWeatherStore } = props;
  const date = moment(currentWeatherStore.dt * 1000).format('Do MMM YY');
  const time = moment(currentWeatherStore.dt * 1000).format('ddd HH:mm');
  const weatherIcon = `http://openweathermap.org/img/wn/${currentWeatherStore.weather[0].icon}@2x.png`;

  return (
    <div className='current-main-weather'>
      <div className='current-main-weather-info'>
        <span> {date} </span>
        <span> {time} </span>
        <h4 className='current-main-weather-info_degree'>
          {Math.floor(currentWeatherStore.main.temp - 273)}c
          </h4>
        <span className='current-main-weather-info_description' >
          {currentWeatherStore.weather[0].description}
        </span>
      </div>
      <img
        className='current-main-weather-icon'
        src={weatherIcon}
        alt='icon' />
    </div>
  )
}

export default CurrentMainWeather;
import React from 'react';
import moment from 'moment'
import './styles.scss';

const OtherTimeWeather = (props) => {
  const { weather } = props;

  const time = moment(weather.dt*1000).calendar();
  const temp = Math.floor(weather.main.temp - 273)
  const wind = weather.wind.speed
  const pressure = weather.main.pressure
  const wIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div  className='other-time-weather'>
      <span className='other-time-weather-text'> {time} </span>
        <img
          alt='icon'
          src={wIcon} 
          className='other-time-weather_icon'/>
      <span className='other-time-weather-text'> {temp} c </span>
      <span className='other-time-weather-text'> {wind} m/s </span>
      <span className='other-time-weather-text'> {pressure} hpa </span>
    </div>
  )
}

export default OtherTimeWeather;
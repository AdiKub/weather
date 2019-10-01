import React from 'react';
import moment from 'moment'
import './styles.scss';

const OtherTimeWeather = (props) => {
  const { weather } = props;

  const weatherCurrentDate = moment(weather.dt*1000).format('ddd Do MMM');
  const hours = new Date(weather.dt*1000).getHours();
  const todayDateNumber = new Date().getDate();
  const otherDateNumber = new Date(weather.dt*1000).getDate();
  const time = moment(weather.dt*1000).format('HH:mm');
  const temp = Math.floor(weather.main.temp - 273)
  const wind = weather.wind.speed
  const pressure = weather.main.pressure
  const wIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div  className='other-time-weather'>
      <span className='other-time-weather-text'> {weatherCurrentDate} </span>
      <span className='other-time-weather-text'> 
      {todayDateNumber === otherDateNumber ?     // displays time for today or "night"/"day" for otherdays  
        time : 
        (hours === 21 ? 'night':'day')} 
      </span>
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
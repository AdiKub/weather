import React from 'react';
import {faSun} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from 'moment'
import './styles.scss';

const OtherTimeWeather = (props) => {
  const { weather } = props;

  const time = moment(weather.dt*1000).calendar();
  const temp = Math.floor(weather.main.temp - 273)
  const wind = weather.wind.speed
  const pressure = weather.main.pressure
  return (
    <div  className='other-time-weather'>
      <span className='other-time-weather-text'> {time} </span>
      <FontAwesomeIcon
        className='other-time-weather_icon'
        icon={faSun}
      />
      <span className='other-time-weather-text'> {temp} c </span>
      <span className='other-time-weather-text'> {wind} m/s </span>
      <span className='other-time-weather-text'> {pressure} hpa </span>
    </div>
  )
}

export default OtherTimeWeather;
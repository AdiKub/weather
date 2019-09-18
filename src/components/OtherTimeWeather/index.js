import React from 'react';
import {faSun} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './styles.scss';

const OtherTimeWeather = () => {
  return (
    <div className='other-time-weather'>
      <span className='other-time-weather-text'> time </span>
      <FontAwesomeIcon
        className='other-time-weather_icon'
        icon={faSun}
      />
      <span className='other-time-weather-text'> +10c  </span>
      <span className='other-time-weather-text'> 0.3 m/s </span>
      <span className='other-time-weather-text'> 1024 hpa </span>
    </div>
  )
}

export default OtherTimeWeather;
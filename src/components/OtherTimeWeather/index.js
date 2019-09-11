import React from 'react';
import {faSun} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './styles.scss';

const OtherTimeWeather = () => {
  return (
    <div className='other-time-weather'>
      <span> time </span>
      <FontAwesomeIcon
        className='other-time-weather_icon'
        icon={faSun}
      />
      <span> +10c  </span>
      <span> 0.3 m/s </span>
      <span> 1024 hpa </span>
    </div>
  )
}

export default OtherTimeWeather;
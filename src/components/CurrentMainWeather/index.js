import React from 'react';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

const CurrentMainWeather = () => {
  return (
    <div className='current-main-weather'>
      <div className='current-main-weather-info'>
        <span> 15:30 Sep 10 </span>
        <h4 className='current-main-weather-info_degree'> +16 c </h4>
        <span> Sunny </span>
      </div>
        <FontAwesomeIcon
          className='current-main-weather-icon'
          icon={faSun}
        />
    </div>
  )
}

export default CurrentMainWeather;
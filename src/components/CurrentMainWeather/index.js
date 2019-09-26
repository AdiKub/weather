import React from 'react';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment'

import './styles.scss';

const CurrentMainWeather = (props) => {
  const { currentWeatherStore } = props;
  const date = moment(currentWeatherStore.dt*1000).format('MMM Do YY');
  const time = moment(currentWeatherStore.dt*1000).format('LT');
  console.log(currentWeatherStore.dt)

    return (
      <div className='current-main-weather'>
        <div className='current-main-weather-info'>
          <span> {date} </span>
          <span> {time} </span>
          <h4 className='current-main-weather-info_degree'> 
           {Math.floor(currentWeatherStore.main.temp - 273)}c </h4>
          <span className='current-main-weather-info_description' > 
            {currentWeatherStore.weather[0].description} </span>
        </div>
          <FontAwesomeIcon
            className='current-main-weather-icon'
            icon={faSun}
          />
      </div>
    )    
}

export default CurrentMainWeather;
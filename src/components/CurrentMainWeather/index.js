import React from 'react';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

const CurrentMainWeather = (props) => {
  const { currentWeatherStore } = props;
  const todayDate = new Date;
  const day = todayDate.getDate();
  const monthIndex = todayDate.getMonth();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const year = todayDate.getFullYear();
  const toDay = day + ' ' + monthNames[monthIndex] + ' ' + year;

  console.log(  )
  console.log(currentWeatherStore)
    return (
      <div className='current-main-weather'>
        <div className='current-main-weather-info'>
          <span> {toDay} </span>
          <h4 className='current-main-weather-info_degree'> 
           { Math.floor(currentWeatherStore.main.temp - 273)}c </h4>
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
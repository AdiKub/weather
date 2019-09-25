import React from 'react';

import CurrentAdditionalWeather from "../CurrentAdditionalWeather";
import CurrentMainWeather from "../CurrentMainWeather";
import './styles.scss';
import OtherTimeWeather from "../OtherTimeWeather";

const TodayWeather = (props) => {
  const { currentWeatherStore, futureWeatherStore } = props;
  const count = Object.keys(currentWeatherStore).length
  return (
    <div className='today-weather'>
      {count &&
      <div className='container'>
         <div className='today-weather-current'>
         <CurrentMainWeather currentWeatherStore={currentWeatherStore}/>
         <CurrentAdditionalWeather currentWeatherStore={currentWeatherStore}/>
       </div>
        <div className='today-weather-other-time'>
          <OtherTimeWeather/>
          <OtherTimeWeather/>
        </div>
      </div>}
    </div>
  )
}

export default TodayWeather;
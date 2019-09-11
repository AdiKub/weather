import React from 'react';

import CurrentAdditionalWeather from "../CurrentAdditionalWeather";
import CurrentMainWeather from "../CurrentMainWeather";
import './styles.scss';
import OtherTimeWeather from "../OtherTimeWeather";

const TodayWeather = () => {
  return (
    <div className='today-weather'>
      <div className='container'>
        <div className='today-weather-current'>
          <CurrentMainWeather/>
          <CurrentAdditionalWeather/>
        </div>
        <div className='today-weather-other-time'>
          <OtherTimeWeather/>
          <OtherTimeWeather/>
        </div>
      </div>
    </div>
  )
}

export default TodayWeather;
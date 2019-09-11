import React from 'react';

import TodayWeather from "../TodayWeather";
import WeatherMap from "../WeatherMap";
import OtherDaysWeathers from "../OtherDaysWeathers";

import './styles.scss';

const WeatherDetail = () => {
  return (
    <div className='weather-detail'>
      <TodayWeather/>
      <div className='weather-detail-map-wrapper'>
        <WeatherMap/>
      </div>
      <OtherDaysWeathers/>
    </div>
  )
}

export default WeatherDetail;
import React from 'react';

import TodayWeather from "../TodayWeather";
import WeatherMap from "../WeatherMap";
import OtherDaysWeathers from "../OtherDaysWeathers";
import WeatherTitleWithForm from "../WeatherTitleWithForm";
import './styles.scss';

const WeatherDetail = () => {
  return (
    <div className='weather-detail'>
      <WeatherTitleWithForm/>
      <TodayWeather/>
      <WeatherMap/>
      <OtherDaysWeathers/>
    </div>
  )
}

export default WeatherDetail;
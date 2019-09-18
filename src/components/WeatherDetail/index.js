import React from 'react';

import TodayWeather from "../TodayWeather";
import WeatherMap from "../WeatherMap";
import OtherDaysWeathers from "../OtherDaysWeathers";
import WeatherTitleWithFormContainer from "../../container/WeatherTitleWithFormContainer";
import './styles.scss';

const WeatherDetail = () => {

  return (
    <div className='weather-detail'>
      <WeatherTitleWithFormContainer/>
      <TodayWeather/>
      <WeatherMap/>
      <OtherDaysWeathers/>
    </div>
  )
};

export default WeatherDetail;
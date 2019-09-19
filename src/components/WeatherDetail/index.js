import React from 'react';

import TodayWeather from "../TodayWeather";
import OtherDaysWeathers from "../OtherDaysWeathers";
import WeatherMapContainer from "../../container/WeatherMapContainer";
import WeatherTitleWithFormContainer from "../../container/WeatherTitleWithFormContainer";
import './styles.scss';

const WeatherDetail = () => {

  return (
    <div className='weather-detail'>
      <WeatherTitleWithFormContainer/>
      <TodayWeather/>
      <WeatherMapContainer/>
      <OtherDaysWeathers/>
    </div>
  )
};

export default WeatherDetail;
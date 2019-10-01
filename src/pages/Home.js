import React from 'react'

import TodayWeatherContainer from "../container/TodayWeatherContainer";
import OtherDaysWeathersContainer from "../container/OtherDaysWeathersContainer";
import WeatherMapContainer from "../container/WeatherMapContainer";
import WeatherTitleWithFormContainer from "../container/WeatherTitleWithFormContainer";
import '../assets/main.scss'

const Home = () => {
  return (
    <div className='weather-detail'>
    <WeatherTitleWithFormContainer/>
    <TodayWeatherContainer/>
    <WeatherMapContainer/>
    <OtherDaysWeathersContainer/>
  </div>
  )
};

export default Home
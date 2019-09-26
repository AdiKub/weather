import React from 'react';

import CurrentAdditionalWeather from "../CurrentAdditionalWeather";
import CurrentMainWeather from "../CurrentMainWeather";
import './styles.scss';
import OtherTimeWeather from "../OtherTimeWeather";

const TodayWeather = (props) => {
  const { currentWeatherStore, futureWeatherStore } = props;
  const count = Object.keys(currentWeatherStore).length;
  const count2 = Object.keys(futureWeatherStore).length;
  return (
    <div className='today-weather'> 
      <div className='container'>
        {count &&
          <div className='today-weather-current'>
          <CurrentMainWeather currentWeatherStore={currentWeatherStore}/>
          <CurrentAdditionalWeather currentWeatherStore={currentWeatherStore}/>
          </div>
        }
        {count2 && 
          <div className='today-weather-other-time'>
            {[0, 1, 2].map(weatherindex => 
              <OtherTimeWeather 
                key={futureWeatherStore.list[weatherindex].dt} 
                weather={futureWeatherStore.list[weatherindex]}/>
              )}
          </div>}
      </div>
    </div>
  )
};

export default TodayWeather;
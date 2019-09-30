import React from 'react';

import CurrentAdditionalWeather from "../CurrentAdditionalWeather";
import CurrentMainWeather from "../CurrentMainWeather";
import './styles.scss';
import OtherTimeWeather from "../OtherTimeWeather";

const TodayWeather = (props) => {
  const { currentWeatherStore, futureWeatherStore } = props;
  
  const arrGenerator = (CW, FW) => {
    const currentHours = new Date(CW.dt*1000).getHours();
    const otherHours = new Date(FW.list[0].dt*1000).getHours();
    const differ = otherHours - currentHours;
    let arr = ''
    differ < 2 ? arr = [1, 2] : arr = [0, 1, 2]
    return arr
  }

  return (
    <div className='today-weather'>
      <div className='container'>
        <div className='today-weather-current'>
          <CurrentMainWeather currentWeatherStore={currentWeatherStore} />
          <CurrentAdditionalWeather currentWeatherStore={currentWeatherStore} />
        </div>
        <div className='today-weather-other-time'>
          {futureWeatherStore.list.length > 0 && 
            arrGenerator(currentWeatherStore, futureWeatherStore)
            .map(weatherindex =>
              <OtherTimeWeather
                key={futureWeatherStore.list[weatherindex].dt}
                weather={futureWeatherStore.list[weatherindex]} 
              />
          )}
        </div>
      </div>
    </div>
  )
};

export default TodayWeather;
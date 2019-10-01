import React from 'react';

import CurrentAdditionalWeather from "../CurrentAdditionalWeather";
import CurrentMainWeather from "../CurrentMainWeather";
import OtherTimeWeather from "../OtherTimeWeather";
import './styles.scss';

const TodayWeather = (props) => {
  const { currentWeatherStore, futureWeatherStore } = props;
  
  const arrGenerator = (CW, FW) => {             // generates array for display 2 or 3 different weather time for a current date which takes from array futureWeatherStore.list. 
    const currentHours = new Date(CW.dt*1000).getHours();
    const otherHours = new Date(FW.list[0].dt*1000).getHours();
    const difference = otherHours - currentHours;
    let arr = ''
    difference < 2 ? arr = [1, 2] : arr = [0, 1, 2]
    return arr
  }

  return (
    <div className='today-weather'>
      <div className='container'>
        <div className='today-weather-wrapper'>
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
    </div>
  )
};

export default TodayWeather;
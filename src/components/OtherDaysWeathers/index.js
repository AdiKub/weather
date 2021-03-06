import React from 'react';

import OtherTimeWeather from "../OtherTimeWeather";
import './styles.scss';

const OtherDaysWeathers = (props) => {
  const { futureWeatherStore } = props;
  const otherDayWeather = [];

  futureWeatherStore.list.length > 0 && futureWeatherStore.list.map((weather)=> { // collects weathers as day/night for other days.
    const todayDate = new Date().getDate();
    const otherDate = new Date(weather.dt*1000).getDate();
    const otherHours = new Date(weather.dt*1000).getHours();
    // eslint-disable-next-line no-mixed-operators
    if (todayDate !== otherDate && (otherHours === 15 || otherHours === 21)){   
        otherDayWeather.push(weather)
    }
    return otherDayWeather
  });

  return (
    <div className='other-days-weathers'>
      <div className='container'>
        <div className='other-days-weathers-wrapper'>
          {otherDayWeather.slice(0, 8).map(otherTime=>(
            <OtherTimeWeather 
              key={otherTime.dt} 
              weather={otherTime}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OtherDaysWeathers;
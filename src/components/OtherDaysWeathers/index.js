import React from 'react';

import OtherTimeWeather from "../OtherTimeWeather";
import './styles.scss';

const OtherDaysWeathers = (props) => {
  const { futureWeatherStore } = props;
  const otherDayweather = [];

  futureWeatherStore.list && futureWeatherStore.list.map((w)=>{
    const todayDate = new Date().getDate()
    const otherDate = new Date(w.dt*1000).getDate()
    const otherHours = new Date(w.dt*1000).getHours()
    
    if (todayDate !== otherDate && otherHours === 15 ){
      otherDayweather.push(w)
    } 
  })
  console.log(otherDayweather)
  const arr = [3,7,11,15,19,23,27,31]
  return (
    <div className='other-days-weathers'>
      <div className='container'>
        {otherDayweather.length === 5 && otherDayweather.map(otherTime=>(
          <OtherTimeWeather 
            key={otherTime.dt} 
            weather={otherTime}/>
        ))}
      </div>
    </div>
  )
}

export default OtherDaysWeathers;
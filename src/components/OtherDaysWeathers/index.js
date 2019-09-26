import React from 'react';

import OtherTimeWeather from "../OtherTimeWeather";
import './styles.scss';

const OtherDaysWeathers = (props) => {
  const { futureWeatherStore } = props;
  const count = Object.keys(futureWeatherStore).length;
  const arr = [3,6,9,12,15,17,20]
  return (
    <div className='other-days-weathers'>
      <div className='container'>
        {count && arr.map(otherTime=>(
          <OtherTimeWeather 
            key={otherTime} 
            weather={futureWeatherStore.list[otherTime]}/>
        ))}
      </div>
    </div>
  )
}

export default OtherDaysWeathers;
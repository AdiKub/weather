import React from 'react';

import OtherTimeWeather from "../OtherTimeWeather";
import './styles.scss';

const OtherDaysWeathers = () => {
  const arr = [0,1,2,3,4,5,6,7]
  return (
    <div className='other-days-weathers'>
      <div className='container'>
        {arr.map(otherTime=>(
          <OtherTimeWeather key={otherTime} />
        ))}
      </div>
    </div>
  )
}

export default OtherDaysWeathers;
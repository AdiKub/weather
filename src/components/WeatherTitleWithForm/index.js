import React from 'react';
import { getName } from 'country-list';

import LocationSearchInputContainer from '../../container/LocationSearchInputContainer';

import './styles.scss';

const WeatherTitleWithForm = (props) => {
  const { currentWeatherStore } = props;

  return (
    <div className='weather-title'>
      <div className='container'>
        <div className='weather-title-wrapper'>
          <h2 className='weather-title_text'>
            {currentWeatherStore.name + ' '}
            {currentWeatherStore.sys.country ? // getName() always needs some value so we should use condition
              getName(currentWeatherStore.sys.country) : ''}
          </h2> 
          <div className='weather-title-form'>
          <LocationSearchInputContainer/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default WeatherTitleWithForm;
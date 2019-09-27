import React from 'react';
import { getName } from 'country-list';

import GoogleMapReact from 'google-map-react';

import './styles.scss';

const WeatherTitleWithForm = (props) => {
  const { currentWeatherStore } = props;
  const count = Object.keys(currentWeatherStore).length;
  return (
    <div className='weather-title'>
      <div className='container'>
        <h2 className='weather-title_text'>
          {count && `${currentWeatherStore.name} 
            ${currentWeatherStore.sys.country ? 
            getName(currentWeatherStore.sys.country) : '?'}`} 
        </h2>
        <div className='weather-title-form'>
         <input className='weather-title-form_input'></input>
        </div>
      </div>
    </div>
  )
};

export default WeatherTitleWithForm;
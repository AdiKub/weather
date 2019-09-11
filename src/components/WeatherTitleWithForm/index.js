import React from 'react';

import './styles.scss';

const WeatherTitleWithForm = () => {
  return (
    <div className='weather-title'>
      <div className='container'>
        <h2 className='weather-title_text'>
          Bishkek Kyrgyzstan
        </h2>
        <div className='weather-title-form'>
          <input className='weather-title-form_input'/>
        </div>
      </div>
    </div>
  )
}

export default WeatherTitleWithForm;
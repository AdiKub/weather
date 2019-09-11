import React from 'react';
import GoogleMapReact from 'google-map-react';

import './styles.scss';
import city from '../../city.json'
console.log(city.coord)

const WeatherMap = () => {

  return (
    <div className='weather-map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key:'AIzaSyDbWXT-YxZ4GmJBVsDS17q8wYKMjbK2KFM' }}
        defaultCenter={{lng: city.coord.lon, lat:  city.coord.lat}}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
      >
      </GoogleMapReact>
    </div>
  )
}

export default WeatherMap;
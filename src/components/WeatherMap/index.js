import React from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from '../MapMarker';
import './styles.scss';
import city from '../../city.json'

const WeatherMap = () => {

  return (
    <div className='weather-map'>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDbWXT-YxZ4GmJBVsDS17q8wYKMjbK2KFM'}}
        defaultCenter={{lng: city.coord.lon, lat: city.coord.lat}}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
      >
        <MapMarker
          lat={city.coord.lat}
          lng={city.coord.lon}
        />
      </GoogleMapReact>
    </div>
  );
};

export default WeatherMap;
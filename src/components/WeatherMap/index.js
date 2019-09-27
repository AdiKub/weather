import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from '../MapMarker';
import './styles.scss';

const WeatherMap = (props) => {
  const { getWeatherStartAction, currentWeatherStore } = props;
  const count = Object.keys(currentWeatherStore).length;
  const googleKey = 'AIzaSyDbWXT-YxZ4GmJBVsDS17q8wYKMjbK2KFM';
  
  useEffect(() => {
    if (!count) {
      navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(getPositionWeather)
    }
  });

  const getPositionWeather = (position) => {
    const coords = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };
    getWeatherStartAction(coords)
  };

  return (
    <div className='weather-map'>
      {count ?
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleKey }}
          defaultCenter={{
            lat: currentWeatherStore.coord.lat,
            lng: currentWeatherStore.coord.lon,
          }}
          center={{
            lat: currentWeatherStore.coord.lat,
            lng: currentWeatherStore.coord.lon,
          }}
          defaultZoom={10}
          onClick={(e) => getWeatherStartAction({lat: e.lat, lon: e.lng})}
        >
          <MapMarker
            lat={currentWeatherStore.coord.lat}
            lng={currentWeatherStore.coord.lon}
          />
        </GoogleMapReact> : 
        <div>
        </div>
      }
    </div>
  );
};

export default WeatherMap;
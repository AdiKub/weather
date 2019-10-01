import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from '../MapMarker';
import './styles.scss';

const WeatherMap = (props) => {
  const { getWeatherStartAction, currentWeatherStore } = props;
  const MAP_KEY = process.env.GOOGLE_MAP_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getPositionWeather)
  }, []);

  const getPositionWeather = (position) => {   // makes a request with current place position coordinates
    const coords = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };
    getWeatherStartAction(coords)
  };

  return (
    <div className='weather-map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAP_KEY }}
        defaultCenter={{
          lat: 42.85,
          lng: 74.59,
        }}
        center={{
          lat: currentWeatherStore.coord.lat,
          lng: currentWeatherStore.coord.lon,
        }}
        defaultZoom={10}
        onClick={(e) => getWeatherStartAction({ lat: e.lat, lon: e.lng })}
      >
        <MapMarker
          lat={currentWeatherStore.coord.lat}
          lng={currentWeatherStore.coord.lon}
        />
      </GoogleMapReact> :
      <div>
      </div>
    </div>
  );
};

export default WeatherMap;
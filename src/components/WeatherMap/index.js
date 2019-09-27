import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from '../MapMarker';
import './styles.scss';

const WeatherMap = (props) => {
  const { getWeatherStartAction, currentWeatherStore } = props;

  const googleKey = 'AIzaSyDbWXT-YxZ4GmJBVsDS17q8wYKMjbK2KFM';

  useEffect(() => {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition(getPositionWeather)
  }, []);

  const getPositionWeather = (position) => {
    const coords = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };
    getWeatherStartAction(coords)
  };

  return (
    <div className='weather-map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleKey }}
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
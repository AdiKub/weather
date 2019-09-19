import React, { useEffect }  from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from '../MapMarker';
import './styles.scss';
import city from '../../city.json';

const WeatherMap = (props) => {
  const { getCurrentWeather } = props;

  useEffect(()=> {
    navigator.geolocation &&
    navigator.geolocation.getCurrentPosition(getPositionWeather)
  }, []);

  const getPositionWeather=(position)=> {
    const coords = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };
    getCurrentWeather(coords)
  };

  return (
    <div className='weather-map'>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDbWXT-YxZ4GmJBVsDS17q8wYKMjbK2KFM'}}
        defaultCenter={{lng: city.coord.lon, lat: city.coord.lat}}
        defaultZoom={10}
        onClick={(e)=>console.log(e)}
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
import React, { useState } from 'react';
import PlacesAutocomplete from 'reactjs-places-autocomplete';
import Geocode from "react-geocode";

import './styles.scss';

const LocationSearchInput = (props) => {
  const { getWeatherStartAction } = props;
  const [inputValue, onInput] = useState('');
  const MAP_KEY = process.env.GOOGLE_MAP_KEY;
  Geocode.setApiKey(MAP_KEY);

  const handleChange = address => {      // sets input value to useState
    onInput(address)
  };

  const handleSelect = address => {      // makes request when some place selects
    Geocode.fromAddress(address)         // placeAutocomplete for looking for input-place from global location list
      .then(
        response => {
          const coords = {
            lat: response.results[0].geometry.location.lat,
            lon: response.results[0].geometry.location.lng
          };
          getWeatherStartAction(coords)    // action for request
        },
        error => {
          console.error(error);
        }
      );
  };

  return (
    <PlacesAutocomplete
      value={inputValue}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'weather-title-form_input',
              type: 'text'
            })}
          />
          <div className="autocomplete-dropdown-container">
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              const style = suggestion.active
                ? { padding: '5px 10px', backgroundColor: '#2b616698', cursor: 'pointer', color: '#ffffff' }
                : { padding: '5px 10px', backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div {...getSuggestionItemProps(suggestion, {
                  className,
                  style
                })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  )
}
export default LocationSearchInput
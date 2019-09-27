import React from 'react';
import { connect } from 'react-redux';
import {  getWeatherStart } from '../../store/main/actions';

import LocationSearchInput from '../../components/LocationSearchInput';

const LocationSearchInputContainer = props => <LocationSearchInput {...props} />;

const mapDispatchToProps = dispatch => ({
  getWeatherStartAction: (coords = {}) => dispatch(getWeatherStart(coords)),
});

export default connect(null, mapDispatchToProps)(LocationSearchInputContainer);
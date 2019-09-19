import React from 'react';
import { connect } from 'react-redux';
import {  getCurrentWeather } from '../../store/main/actions';

import WeatherMap from '../../components/WeatherMap';

const WeatherMapContainer = props => <WeatherMap {...props} />;

const mapStateToProps = store => ({
  currentWeather: store.currentWeather,
  error: store.error,
});

const mapDispatchToProps = dispatch => ({
  getCurrentWeather: (coords = {}) => dispatch(getCurrentWeather(coords)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherMapContainer);
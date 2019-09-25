import React from 'react';
import { connect } from 'react-redux';
import {  getWeatherStart } from '../../store/main/actions';

import WeatherMap from '../../components/WeatherMap';

const WeatherMapContainer = props => <WeatherMap {...props} />;

const mapStateToProps = store => ({
  currentWeatherStore: store.currentWeatherStore,
});

const mapDispatchToProps = dispatch => ({
  getWeatherStartAction: (coords = {}) => dispatch(getWeatherStart(coords)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherMapContainer);
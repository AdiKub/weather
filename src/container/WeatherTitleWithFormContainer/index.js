import React from 'react';
import { connect } from 'react-redux';
import {  getCurrentWeather } from '../../store/main/actions';

import WeatherTitleWithForm from '../../components/WeatherTitleWithForm';

const WeatherTitleWithFormContainer = props => <WeatherTitleWithForm {...props} />;

const mapStateToProps = store => ({
  currentWeather: store.currentWeather,
  error: store.error,
});

const mapDispatchToProps = dispatch => ({
  getCurrentWeatherAction: (coords = '') => dispatch(getCurrentWeather(coords)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherTitleWithFormContainer);
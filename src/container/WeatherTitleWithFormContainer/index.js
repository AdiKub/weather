import React from 'react';
import { connect } from 'react-redux';
import {  getCurrentWeatherStart } from '../../store/main/actions';

import WeatherTitleWithForm from '../../components/WeatherTitleWithForm';

const WeatherTitleWithFormContainer = props => <WeatherTitleWithForm {...props} />;

const mapStateToProps = store => ({
  currentWeather: store.currentWeather,
  futureWeather: store.futureWeather,
  error: store.error,
});

const mapDispatchToProps = dispatch => ({
  getCurrentWeatherStart: (requestParams = '') => dispatch(getCurrentWeatherStart(requestParams)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherTitleWithFormContainer);
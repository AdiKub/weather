import React from 'react';
import { connect } from 'react-redux';

import TodayWeather from '../../components/TodayWeather';

const TodayWeatherContainer = props => <TodayWeather {...props} />;

const mapStateToProps = store => ({
  currentWeatherStore: store.currentWeatherStore,
  futureWeatherStore: store.futureWeatherStore,
});

export default connect(mapStateToProps, null)(TodayWeatherContainer);
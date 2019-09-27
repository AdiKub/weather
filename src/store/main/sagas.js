import {
    take, put, call, fork,
  } from 'redux-saga/effects';
  import * as api from '../../api';
  import * as actions from './actions';
  import * as actionTypes from './actionTypes';
  
  
  export function* createCurrentWeather(coords) {
    const response = yield call(api.currentWeatherRequest,  coords);
    if (response)
    yield put(actions.getCurrentWeather(response));
    else
    yield put(actions.getCurrentWeatherFailure(response));
  }
  
  export function* createFutureWeather(coords) {
    const response = yield call(api.futureWeatherRequest,  coords);
    if (response)
    yield put(actions.getFutureWeather(response));
    else
    yield put(actions.getFutureWeatherFailure(response));
  }
     
  export function* watchCreateCurrentWeather() {
    while (true) {
      const { coords } = yield take(actionTypes.GET_WEATHER_START);
      yield call(createCurrentWeather, coords);
    }
  }
  
  export function* watchCreateFutureWeather() {
    while (true) {
      const { coords } = yield take(actionTypes.GET_WEATHER_START);
      yield call(createFutureWeather, coords);
    }
  }
  
  export default function* () {
    yield fork(watchCreateCurrentWeather);
    yield fork(watchCreateFutureWeather);
  }
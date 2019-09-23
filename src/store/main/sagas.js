import {
    take, put, call, fork,
  } from 'redux-saga/effects';
  import * as api from '../../api';
  import * as actions from './actions';
  import * as actionTypes from './actionTypes';
  
  
  export function* createCurrentWeather(coords) {
    try {
      const response = yield call(api.currentWeatherRequest,  coords);
      yield put(actions.getCurrentWeather(response));
    } catch (responseError) {
      yield put(actions.getCurrentWeatherFailure(responseError));
    }
  }
  
  export function* createFutureWeather(coords) {
    try {
      const response = yield call(api.futureWeatherRequest,  coords);
      yield put(actions.getFutureWeather(response));
    } catch (responseError) {
      yield put(actions.getFutureWeatherFailure(responseError));
    }
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
import { call, put, takeEvery, take, fork } from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import * as api from '../../api';

function* getWeathers(coords) {
  try {
    const currentWeather = yield call(api.currentWeatherRequest, coords.coords);
    const futureWeather = yield call(api.futureWeatherRequest, coords.coords );
    yield put(actions.getCurrentWeather(currentWeather));
    yield put(actions.getFutureWeather(futureWeather));
  } catch (e) {
    yield put({type: "GET_CURRENT_WEATHER_FAILED", message: e.message});
  }
}
export function* watchGetWeathers() {
  while (true) {
    const { coords } = yield take(actionTypes.GET_CURRENT_WEATHER);
    yield call(getWeathers, coords);
  }
}
function* mainSaga() {
  yield fork(watchGetWeathers);
}

export default mainSaga;


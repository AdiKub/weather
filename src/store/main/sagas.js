import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import * as Api from '../../api';

function* getWeathers(action) {
  try {
    const currentWeather = yield call(Api.currentWeatherRequest);
    const futureWeather = yield call(Api.futureWeatherRequest)
    yield put(actions.getCurrentWeatherSuccess(currentWeather));
    yield put(actions.getFutureWeatherSuccess(futureWeather));
  } catch (e) {
    yield put({type: "GET_CURRENT_WEATHER_FAILED", message: e.message});
  }
}
function* mainSaga() {
  yield takeEvery(actionTypes.GET_CURRENT_WEATHER_START, getWeathers);
}
export default mainSaga;


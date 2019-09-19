import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import * as api from '../../api';


function* getWeathers(coords) {
  try {
    const currentWeather = yield call(api.currentWeatherRequest(coords));
    //const futureWeather = yield call(Api.futureWeatherRequest(coords.coords));
    yield console.log(currentWeather, "hjhjhjhjhj")
    yield put(actions.getCurrentWeather(currentWeather));
    //yield put(actions.getFutureWeather(futureWeather));
  } catch (e) {
    yield put({type: "GET_CURRENT_WEATHER_FAILED", message: e.message});
  }
}

function* mainSaga() {
  yield takeEvery(actionTypes.GET_CURRENT_WEATHER, getWeathers);
}
export default mainSaga;


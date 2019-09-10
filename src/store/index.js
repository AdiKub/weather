
import { createStore } from 'redux';

const INITIAL_STATE = {
  location: {},
}

const weather = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, location: action.title }
    default:
      return state;
  }
}

const store = createStore(weather);

export default store;
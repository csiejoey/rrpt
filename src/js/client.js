/* eslint-disable */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';

const initialState = {
  fetching: false,
  fetched: false,
  user: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOO_PENDING':
      state = { ...state, fetching: true };
      break;
    case 'FOO_REJECTED':
      state = { ...state, fetching: false, error: action.payload };
      break;
    case 'FOO_FULFILLED':
      state = {
        ...state, fetching: false, fetched: true, user: action.payload,
      };
      break;
  }
  return state;
};
const tweetsReducer = (state = [], action) => {
  if (action.type === 'CHANGE_AGE') state = state.concat(action.payload);
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
});

const errorHandler = store => next => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log('errorHandler catch ', e);
  }
};

const middleware = applyMiddleware(promise(), thunk, logger(), errorHandler);

const store = createStore(reducers, middleware);

store.dispatch({
  type: 'FOO',
  payload: axios.get('http://rest.learncode.academy/api/wstern/users'),
});

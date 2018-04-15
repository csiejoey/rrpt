import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import Root from './components/Root';
import rootReducer from './reducers';
import '../css/main.css';

const middleware = applyMiddleware(logger());
const store = createStore(
  rootReducer,
  compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app'),
);

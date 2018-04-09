import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

const middleware = applyMiddleware(logger());
const store = createStore(
  rootReducer,
  compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
